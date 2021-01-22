import {numToHexDigit} from './helpers.js'

// Add hex values to a color object. Expects r, g, b, and a values.
function addHex(obj) {
  const {r, g, b, a} = obj

  return {
    ...obj,
    hexr: numToHexDigit(r),
    hexg: numToHexDigit(g),
    hexb: numToHexDigit(b),
    hexa: numToHexDigit(a * 255),
  }
}

export default addHex
