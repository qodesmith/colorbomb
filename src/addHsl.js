import { safeHue } from './helpers'

/*
  Add hsl values to a color object.
  https://bit.ly/2yUE7xl - Conversion formula came from this wikipedia article. 🙃
*/
function addHsl(obj) {
  let { r, g, b } = obj

  // Convert our RGB values to a range of 0 - 1.
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const chroma = max - min
  const lightness = (max + min) / 2

  const hue = (() => {
    if (chroma === 0) return 0
    if (max === r) return 60 * ((g - b) / chroma)
    if (max === g) return 60 * (2 + ((b - r) / chroma))
    /* max === b */return 60 * (4 + ((r - g) / chroma))
  })()

  const saturation = (() => {
    if (lightness === 0 || lightness === 1) return 0
    return chroma / (1 - Math.abs(2 * max - chroma - 1))
  })()

  return { ...obj, h: safeHue(hue), s: saturation, l: lightness }
}

export default addHsl
