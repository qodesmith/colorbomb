import { safeHue } from './helpers'


/*
  Add rgb values to a color object. Only used when starting from an hsl(a) value.
  https://bit.ly/2XsAWqN - Convertion formula came from this wikipedia article.
*/
function addRgb(obj) {
  const { h, s, l } = obj
  const chroma = (1 - Math.abs((2 * l) - 1)) * s
  const h1 = safeHue(h) / 60
  const x = chroma * (1 - Math.abs((h1 % 2) - 1))
  const rgbPrimes = (() => {
    switch(Math.ceil(h1)) {
      case 1: return [chroma, x, 0]
      case 2: return [x, chroma, 0]
      case 3: return [0, chroma, x]
      case 4: return [0, x, chroma]
      case 5: return [x, 0, chroma]
      case 6: return [chroma, 0, x]
      default: return [0, 0, 0]
    }
  })()
  const match = l - (chroma / 2)
  const [r, g, b] = rgbPrimes.map(prime => Math.round((prime + match) * 255))

  return { ...obj, r, g, b }
}

export default addRgb
