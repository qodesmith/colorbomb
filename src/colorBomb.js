import hexColor from './hexColor'
import rgbaColor from './rgbaColor'
import hslaColor from './hslaColor'
import namedColors from './namedColors'
import { numCheck } from './helpers'
import addHex from './addHex'
import addHsl from './addHsl'


function colorBomb(input) {
  if (typeof input !== 'string') throw new TypeError("You didn't give colorBomb a string :(")

  // Sanitize the input string.
  const str = input.toLowerCase().replace(/ /g, '')

  // Check for named colors.
  if (str.startsWith('#')) {
    return hexColor(str)

  // Starts with 'rgb(' or 'rgba('
  } else if (/^(rgb\(|rgba\()/.test(str)) {
    return rgbaColor(str)

  // Starts with 'hsl(' or 'hsla('
  } else if (/^(hsl\(|hsla\()/.test(str)) {
    return hslaColor(str)

  // Named colors or error.
  } else {
    const namedColorObj = namedColors.find(({ name }) => name === str)
    if (namedColorObj) return hexColor(namedColorObj.hex)
    throw new TypeError(`colorBomb isn't sure what to do with "${str}".`)
  }
}

/*
  Add utility functions to colorBomb.

  These functions can take an array of relevant values
  or each value as an argument.
*/
colorBomb.rgb = function fromRawRgb(r, g, b) {
  return _fromRawRgbOrRgba(Array.isArray(r) ? r : [r, g, b], true)
}

colorBomb.rgba = function fromRawRgba(r, g, b, a) {
  return _fromRawRgbOrRgba(Array.isArray(r) ? r : [r, g, b, a])
}

function _fromRawRgbOrRgba(values, calledFromRgb) {
  // Convert each value to a number - allow strings for flexibility.
  const rgb = values.map(val => +val)
  const alpha = calledFromRgb ? 1 : rgb.pop()
  const rgbOk = rgb.every(val => numCheck(val))
  const alphaOk = numCheck(alpha, 0, 1)
  const commonMessage = ` provided to \`colorBomb.rgb${calledFromRgb ? '' : 'a'}\`.`

  if (!rgbOk) throw new Error(`Invalid values${commonMessage}`)
  if (values.length !== (calledFromRgb ? 3 : 4)) throw new Error(`Incorrect number of values ${commonMessage}`)
  if (!alphaOk) throw new Error(`Incorrect alpha value${commonMessage}`)

  const [r, g, b] = rgb.map(Math.round) // Round to whole numbers.
  return addHex(addHsl({ r, g, b, a: alpha }))
}

colorBomb.hsl = function fromRawHsl(h, s, l) {
  return _fromRawHslOrHsla(Array.isArray(h) ? h : [h, s, l], true)
}

colorBomb.hsla = function fromRawHsla(h, s, l, a) {
  return _fromRawHslOrHsla(Array.isArray(h) ? h : [h, s, l, a])
}

function _fromRawHslOrHsla(values, calledFromHsl) {
  // Convert each value to a number - allow strings for flexibility.
  const hsl = values.map(val => +val)
  const [h, s, l] = hsl
  const alpha = calledFromHsl ? 1 : rgb.pop()
  const hueOk = !isNaN(h)
  const saturationOk = numCheck(s, 0, 100)
  const lightnessOk = numCheck(l, 0, 100)
  const alphaOk = numCheck(alpha, 0, 1)
  const commonMessage = ` provided to \`colorBomb.hsl${calledFromHsl ? '' : 'a'}\`.`

  if (!hueOk) throw new Error(`Incorrect hue value${commonMessage}`)
  if (!saturationOk) throw new Error(`Incorrect saturation value${commonMessage}`)
  if (!lightnessOk) throw new Error(`Incorrect lightness value${commonMessage}`)
  if (values.length !== (calledFromHsl ? 3 : 4)) throw new Error(`Incorrect number of values ${commonMessage}`)
  if (!alphaOk) throw new Error(`Incorrect alpha value${commonMessage}`)
}

export default colorBomb
