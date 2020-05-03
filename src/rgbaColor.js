import { numCheck } from './helpers'
import addHex from './addHex'
import addHsl from './addHsl'


// Rgb(a) string => color object.
function rgbaColor(str) {
  /*
    Split the string by the following 3 characters: (),
    Regex - why so ugly tho?

    This will always leave an empty string as the last item in the array.
  */
  const [type, r, g, b, a, empty] = str.split(/[\(\),]/)
  const isRgb = type === 'rgb'
  const error = new TypeError(`"${str}" isn't a valid ${type} color.`)

  // Check for the correct ending and the correct empty string - there's always an empty string.
  if (!str.endsWith(')') || (isRgb ? a : empty) !== '') throw error

  const alpha = isRgb ? 1 : a
  const colorsOk = [r, g, b].every(num => numCheck(num))
  const alphaOk = numCheck(alpha, 0, 1)

  if (!colorsOk || !alphaOk) throw error

  const results = { r: +r, g: +g, b: +b, a: +alpha }
  return addHex(addHsl(results))
}

export default rgbaColor
