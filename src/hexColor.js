import {hexDigitToNum, numCheck} from './helpers.js'
import addHsl from './addHsl.js'

// Hex string => color object.
function hexColor(str) {
  /*
    ONLY SUPPORTING THE WEB AT THE MOMENT
    -------------------------------------
    * Web     - #RRGGBBAA (https://caniuse.com/#feat=css-rrggbbaa)
    * Android - #AARRGGBB (https://bit.ly/39KzjXS, https://bit.ly/2UFW630)
  */
  const hex = str.slice(1)
  const is3 = hex.length === 3 // af9 => aaff99
  const is4 = hex.length === 4 // af94 => aaff9944 - has alpha
  const is6 = hex.length === 6 // ff0022
  const is8 = hex.length === 8 // ff0022aa - has alpha
  const isShorthand = is3 || is4
  const matches = hex.match(/[a-f]|[0-9]/g)?.length
  const firstCheck = matches === hex.length && (isShorthand || is6 || is8)
  const error = new TypeError(
    `"${hex}" isn't a valid hex${
      is4 || is8 || hex.length > 6 ? '(a)' : ''
    } color.`,
  )

  if (!firstCheck) throw error

  /*
    https://stackoverflow.com/a/6259543/2525633
    Create an array containing the rgba values in order,
    either by two's or single characters.

             RR    GG    BB    AA
    E.x. - ['aa', 'bb', 'ff', 'c0']
  */
  const hexes = hex.match(isShorthand ? /.{1}/g : /.{1,2}/g)

  /*
    Convert shorthand to longhand and then
    convert each longhand value to a number between 0 - 255.
  */
  const numbers = hexes.map(char =>
    hexDigitToNum(char + (isShorthand ? char : '')),
  )

  if (!numbers.every(n => numCheck(n))) throw error

  const [hexr, hexg, hexb, hexa] = hexes
  const [r, g, b] = numbers
  const alphaHex = hexa || 'ff'
  const results = {
    r,
    g,
    b,
    a: hexDigitToNum(alphaHex) / 255,
    hexr,
    hexg,
    hexb,
    hexa: alphaHex,
  }

  return addHsl(results)
}

export default hexColor
