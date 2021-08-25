import {safeHue} from './helpers.js'

/*
  Add rgb values to a color object. Only used when starting from an hsl(a) value.
  https://bit.ly/2XsAWqN - Convertion formula came from this wikipedia article.
*/
function addRgb(obj) {
  const {h, s, l} = obj
  const chroma = (1 - Math.abs(2 * l - 1)) * s
  const h1 = safeHue(h) / 60
  const x = chroma * (1 - Math.abs((h1 % 2) - 1))
  const rgbPrimes = (() => {
    if (h1 <= 1) return [chroma, x, 0]
    if (h1 <= 2) return [x, chroma, 0]
    if (h1 <= 3) return [0, chroma, x]
    if (h1 <= 4) return [0, x, chroma]
    if (h1 <= 5) return [x, 0, chroma]
    if (h1 <= 6) return [chroma, 0, x]
  })()
  const match = l - chroma / 2
  const [r, g, b] = rgbPrimes.map(prime => Math.round((prime + match) * 255))

  return {...obj, r, g, b}
}

export default addRgb
