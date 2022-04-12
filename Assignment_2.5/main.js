'use strict'

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

const drawCar = () => {
  ctx.save()
  ctx.translate(35, 260)

  // Draw the car's trunk
  ctx.fillRect(0, 30, 15, 15)
  ctx.fillStyle = 'red'
  ctx.fillRect(0, 32, 3, 4)
  ctx.fillStyle = 'black'
  // Draw the cokpit
  ctx.fillRect(15, 20, 25, 25)
  //Draw the window
  //Define a windows color
  ctx.fillStyle = 'white'
  ctx.fillRect(28, 23, 7, 7)
  //Retuns to default car's color
  ctx.fillStyle = 'black'
  // Draw the hood
  ctx.fillRect(40, 30, 15, 15)
  ctx.fillStyle = '#ADD8E6'
  ctx.fillRect(52, 32, 3, 4)
  ctx.fillStyle = 'black'
  // Draw the wheels
  ctx.fillRect(7, 43, 10, 10)
  ctx.fillStyle = 'gray'
  ctx.fillRect(9.5, 46, 5, 5)
  ctx.fillStyle = 'black'
  ctx.fillRect(37, 43, 10, 10)
  ctx.fillStyle = 'gray'
  ctx.fillRect(39.5, 46, 5, 5)
  ctx.fillStyle = 'black'
  ctx.restore()
}

drawCar()
