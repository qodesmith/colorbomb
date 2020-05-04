import colorbomb from '../src/colorbomb'
import './sandbox.css'


// Let's us play with colorbomb in the console.
window.colorbomb = colorbomb

function findSectionFromInputNode(input) {
  let section = input.parentElement

  while (section.nodeName !== 'SECTION') {
    section = section.parentElement
  }

  return section
}

function findErrorNodeFromInputNode(input) {
  const section = findSectionFromInputNode(input)
  return section.querySelector('.error')
}

function findSwatchFromInputNode(input, swatchType) {
  const section = findSectionFromInputNode(input)
  return section.querySelector(`.swatch.${swatchType}`)
}

function setSwatchBackgroundColors(input, color) {
  const { rawStringValues, a } = color
  const swatchHex = findSwatchFromInputNode(input, 'hex')
  const swatchRgb = findSwatchFromInputNode(input, 'rgb')
  const swatchHsl = findSwatchFromInputNode(input, 'hsl')
  const hexText = swatchHex.querySelector('.value')
  const rgbText = swatchRgb.querySelector('.value')
  const hslText = swatchHsl.querySelector('.value')
  const alphaOrNot = a === 1 ? '' : 'a'

  swatchHex.setAttribute('style', `background: ${hexText.textContent = rawStringValues[`hex${alphaOrNot}`]}`)
  swatchRgb.setAttribute('style', `background: ${rgbText.textContent = rawStringValues[`rgb${alphaOrNot}`]}`)
  swatchHsl.setAttribute('style', `background: ${hslText.textContent = rawStringValues[`hsl${alphaOrNot}`]}`)
}

/*
  Auto-width for all input fields - maintain a minimum of 5ch.
  Also clear associated error field.
*/
document.addEventListener('input', e => {
  const input = e.target
  const characters = input.value.length
  const error = findErrorNodeFromInputNode(input)

  input.setAttribute('style', `width: ${characters > 5 ? characters : 5}ch`)
  error.textContent = ''
})


// colorbomb(...)
document.querySelector('.colorbomb form').addEventListener('submit', e => {
  e.preventDefault()
  const input = e.target.colorbomb
  const value = input.value

  try {
    const color = colorbomb(value)
    setSwatchBackgroundColors(input, color)
  } catch(e) {
    const error = findErrorNodeFromInputNode(input)
    error.textContent = e.message
  }
})
