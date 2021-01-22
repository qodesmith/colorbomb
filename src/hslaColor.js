import {numCheck, safeHue} from './helpers.js'
import addHex from './addHex.js'
import addRgb from './addRgb.js'

// Hsl(a) string => color object.
function hslaColor(str) {
  /*
    Split the string by the following 3 characters: (),
    This will always leave an empty string as the last item in the array.
  */
  const [type, h, s, l, a, empty] = str.split(/[\(\),]/)
  const isHsl = type === 'hsl'
  const error = new TypeError(`"${str}" isn't a valid ${type} color.`)
  const getPercentNumAndCheck = val => {
    const num = +val.slice(0, -1)
    if (!/%$/.test(val) || !numCheck(num, 0, 100)) throw error
    return num / 100
  }

  // Check for the correct ending and the correct empty string - there's always an empty string.
  if (!str.endsWith(')') || (isHsl ? a : empty) !== '') throw error

  const hue = safeHue(h)
  const saturation = getPercentNumAndCheck(s)
  const lightness = getPercentNumAndCheck(l)
  const alpha = isHsl ? 1 : +a
  const alphaOk = numCheck(alpha, 0, 1)

  if (isNaN(hue) || !alphaOk) throw error

  const results = {h: hue, s: saturation, l: lightness, a: alpha}
  return addHex(addRgb(results))
}

export default hslaColor
