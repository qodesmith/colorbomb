import colorbomb from '../src/colorbomb'
import './sandbox.css'


// Let's us play with colorbomb in the console.
window.colorbomb = colorbomb

document.querySelector('.colorbomb button').addEventListener('click', () => {
  const inputValue = document.querySelector('.colorbomb input').value
  const swatch = document.querySelector('.colorbomb .swatch')

  swatch.style.backgroundColor = colorbomb(inputValue).rawStringValues.rgb
})
