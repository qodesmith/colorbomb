import './sandbox.css'

// console.log('Color Bomb:', colorBomb)

document.querySelector('.colorbomb button').addEventListener('click', () => {
  const inputValue = document.querySelector('.colorbomb input').value
  const swatch = document.querySelector('.colorbomb .swatch')

  swatch.style.backgroundColor = colorBomb(inputValue)
})