var extract = require('extract-svg-path')
var fs = require('fs')
var path = require('path')

function output (input, file) {
  var paths = extract(path.join(__dirname, input))
  var script = 'module.exports = ' + JSON.stringify(paths) + ';'
  fs.writeFile(path.join(__dirname, file), script, function (err) {
    if (err) throw err
  })
}

output('camera.svg', 'camera.js')
output('retro.svg', 'retro.js')