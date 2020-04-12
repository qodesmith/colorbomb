/*
  Converts a hex digit (or digit pair) to a number from 0 - 255.
  'af' => 175
*/
const hexDigitToNum = hexDigit => parseInt(hexDigit, 16)

/*
  Converts a number to a hex digit pair.
  170 => 'aa'
*/
const numToHexDigit = num => Math.round(num).toString(16).padStart(2, '0') // Ensure each number is a 2-character hex code.

// Ensures a number is within a given range. Default is 0 - 255.
const numCheck = (num, min = 0, max = 255) => +num >= min && +num <= max

// Ensures a hue value between 0 and 360˚.
const safeHue = hue => +hue % 360 + (+hue < 0 ? 360 : 0)

export default {
  hexDigitToNum,
  numToHexDigit,
  numCheck,
  safeHue
}
