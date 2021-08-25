import namedColors from './namedColors.js'

/*
  Convert all colors to raw string values.
  Expects a completed color object.
*/
function addRawStringValues(obj) {
  const {hexr, hexg, hexb, hexa, r, g, b, h, s, l, a} = obj
  const hex = `#${hexr}${hexg}${hexb}`
  const rgbValue = `${r},${g},${b}`
  const hslValue = `${Math.round(h)},${Math.round(s * 100)}%,${Math.round(
    l * 100,
  )}%`

  obj.rawStringValues = {
    hex,
    hexa: `${hex}${hexa}`,
    rgb: `rgb(${rgbValue})`,
    rgba: `rgba(${rgbValue},${a})`,
    hsl: `hsl(${hslValue})`,
    hsla: `hsla(${hslValue},${a})`,
    colorName: namedColors.find(colorNameObj => colorNameObj.hex === hex)?.name,
  }

  return obj
}

export default addRawStringValues
