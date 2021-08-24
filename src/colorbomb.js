import hexColor from './hexColor.js'
import rgbaColor from './rgbaColor.js'
import hslaColor from './hslaColor.js'
import namedColors from './namedColors.js'
import {numCheck} from './helpers.js'
import addHex from './addHex.js'
import addHsl from './addHsl.js'
import addRawStringValues from './addRawStringValues.js'

/*
  TODO:
    Make some tools, like the "Choose a harmony" tool
    found in this article - https://blog.datawrapper.de/beautifulcolors/

  Example uses:
    * colorbomb('red')
    * colorbomb('#f00')
    * colorbomb('#ff0000')
    * colorbomb('#ff000022')
    * colorbomb('rgb(255, 0, 0)')
    * colorbomb('rgba(255, 0, 0, .33)')
    * colorbomb('hsl(160, 100%, 75%)')
    * colorbomb('hsla(160, 100%, 75%, .33)')
*/
function colorbomb(input) {
  if (typeof input !== 'string') {
    throw new TypeError("You didn't give colorbomb a string :(")
  }

  // Sanitize the input string.
  const str = input.toLowerCase().replace(/ /g, '')

  // Check for named colors.
  if (str.startsWith('#')) {
    return addRawStringValues(hexColor(str))

    // Starts with 'rgb(' or 'rgba('
  } else if (/^(rgb\(|rgba\()/.test(str)) {
    return addRawStringValues(rgbaColor(str))

    // Starts with 'hsl(' or 'hsla('
  } else if (/^(hsl\(|hsla\()/.test(str)) {
    return addRawStringValues(hslaColor(str))

    // Named colors or error.
  } else {
    const namedColorObj = namedColors.find(({name}) => name === str)
    if (namedColorObj) return addRawStringValues(hexColor(namedColorObj.hex))
    throw new TypeError(
      `"${str}" isn't a valid hex(a), rgb(a), hsl(a), or CSS named color.`,
    )
  }
}

//////////////////////////////////////////////////////////
// Add utility functions to colorbomb.                  //
//                                                      //
// These functions can take an array of relevant values //
// or each value as an argument.                        //
//////////////////////////////////////////////////////////

/*
  Example uses:
    * colorbomb.rgb([255, 0, 0])
    * colorbomb.rgb(255, 0, 0)
*/
colorbomb.rgb = function fromRawRgb(r, g, b) {
  return _fromRawRgbOrRgba(Array.isArray(r) ? r : [r, g, b], true)
}

/*
  Example uses:
    * colorbomb.rgba([255, 0, 0, .3])
    * colorbomb.rgba(255, 0, 0, .3)
*/
colorbomb.rgba = function fromRawRgba(r, g, b, a) {
  return _fromRawRgbOrRgba(Array.isArray(r) ? r : [r, g, b, a])
}

function _fromRawRgbOrRgba(values, calledFromRgb) {
  // Convert each value to a number - we allow strings for flexibility.
  const rgb = values.map(val => +val)
  const alpha = calledFromRgb ? 1 : rgb.pop()
  const rgbOk = rgb.every(val => numCheck(val))
  const alphaOk = numCheck(alpha, 0, 1)
  const commonMessage = ` provided to \`colorbomb.rgb${
    calledFromRgb ? '' : 'a'
  }\`.`

  if (!rgbOk) throw new Error(`Invalid values${commonMessage}`)
  if (values.length !== (calledFromRgb ? 3 : 4)) {
    throw new Error(`Incorrect number of values ${commonMessage}`)
  }
  if (!alphaOk) throw new Error(`Incorrect alpha value${commonMessage}`)

  const [r, g, b] = rgb.map(Math.round) // Round to whole numbers.
  return addHex(addHsl({r, g, b, a: alpha}))
}

/*
  Example uses:
    * colorbomb.hsl([327, 100, 86])
    * colorbomb.hsl(327, 100, 86)
*/
colorbomb.hsl = function fromRawHsl(h, s, l) {
  return _fromRawHslOrHsla(Array.isArray(h) ? h : [h, s, l], true)
}

/*
  Example uses:
    * colorbomb.hsla([327, 100, 86, .3])
    * colorbomb.hsla(327, 100, 86, .3)
*/
colorbomb.hsla = function fromRawHsla(h, s, l, a) {
  return _fromRawHslOrHsla(Array.isArray(h) ? h : [h, s, l, a])
}

function _fromRawHslOrHsla(values, calledFromHsl) {
  // Convert each value to a number - we allow strings for flexibility.
  const hsl = values.map(val => +val)
  const [h, s, l] = hsl
  const alpha = calledFromHsl ? 1 : rgb.pop()
  const hueOk = !isNaN(h)
  const saturationOk = numCheck(s, 0, 100)
  const lightnessOk = numCheck(l, 0, 100)
  const alphaOk = numCheck(alpha, 0, 1)
  const commonMessage = ` provided to \`colorbomb.hsl${
    calledFromHsl ? '' : 'a'
  }\`.`

  if (!hueOk) throw new Error(`Incorrect hue value${commonMessage}`)
  if (!saturationOk) {
    throw new Error(`Incorrect saturation value${commonMessage}`)
  }
  if (!lightnessOk) throw new Error(`Incorrect lightness value${commonMessage}`)
  if (values.length !== (calledFromHsl ? 3 : 4)) {
    throw new Error(`Incorrect number of values ${commonMessage}`)
  }
  if (!alphaOk) throw new Error(`Incorrect alpha value${commonMessage}`)
}

export default colorbomb
