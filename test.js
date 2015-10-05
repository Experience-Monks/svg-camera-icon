var canvas = document.createElement('canvas')
var context = canvas.getContext('2d')
var svgMesh3d = require('svg-mesh-3d')
var drawTriangles = require('draw-triangles-2d')

var camera = require('./')
var retro = require('./retro')

var size = 256
canvas.width = canvas.height = size

var i = 0
render()
setInterval(render, 500)

function render () {
  var swap = i++ % 2 === 0
  var mesh1 = svgMesh3d(swap ? camera : retro, {
    simplify: Math.random() * 100
  })

  var scale = size / 2
  context.fillStyle = 'rgba(0,0,0,0.25)'
  context.strokeStyle = '#1d1d1d'
  context.lineWidth = 1 / scale

  context.clearRect(0, 0, size, size)
  context.save()
  context.translate(size / 2, size / 2)
  context.scale(scale, -scale)
  context.beginPath()
  drawTriangles(context, mesh1.positions, mesh1.cells)
  context.fill()
  context.stroke()
  context.restore()
}

document.body.appendChild(canvas)
