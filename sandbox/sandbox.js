import colorbomb from '../src/colorbomb'
import './sandbox.css'


// Let's us play with colorbomb in the console.
window.colorbomb = colorbomb


document.querySelector('.colorbomb form').addEventListener('submit', e => {
  e.preventDefault()
  const input = document.querySelector('.colorbomb input')
  const errorNode = document.querySelector('.colorbomb .error')

  const swatchHex = document.querySelector('.colorbomb .hex')
  const swatchRgb = document.querySelector('.colorbomb .rgb')
  const swatchHsl = document.querySelector('.colorbomb .hsl')

  const swatchHexValue = document.querySelector('.colorbomb .hex .value')
  const swatchRgbValue = document.querySelector('.colorbomb .rgb .value')
  const swatchHslValue = document.querySelector('.colorbomb .hsl .value')

  if (!input.value) return
  
  try {
    const colorObj = colorbomb(input.value)
    console.log(colorObj)
    const alphaOrNot = colorObj.a === 1 ? '' : 'a'

    swatchHexValue.textContent = colorObj.rawStringValues[`hex${alphaOrNot}`]
    swatchRgbValue.textContent = colorObj.rawStringValues[`rgb${alphaOrNot}`]
    swatchHslValue.textContent = colorObj.rawStringValues[`hsl${alphaOrNot}`]

    swatchHex.setAttribute('style', `background:${swatchHexValue.textContent}`)
    swatchRgb.setAttribute('style', `background:${swatchRgbValue.textContent}`)
    swatchHsl.setAttribute('style', `background:${swatchHslValue.textContent}`)

    input.value = ''
    errorNode.textContent = ''
  } catch({ message }) {
    errorNode.textContent = message
  }
})
