# svg-camera-icon

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

<img src="http://i.imgur.com/8LaeZcN.png" width="20%" /> 
<img src="http://i.imgur.com/BA748S9.png" width="20%" />

[FontAwesome's](https://github.com/FortAwesome/Font-Awesome) camera icons as a module, exporting the SVG `<path>` data.

This is useful for quick tests with [svg-mesh-3d](https://github.com/mattdesl/svg-mesh-3d/), [normalize-svg-path](https://www.npmjs.com/package/normalize-svg-path), and various other modules.

## Install

```sh
npm install svg-camera-icon --save
```

## Example

The default export is an SVG path string. It can be fed into modules like [svg-mesh-3d](https://github.com/mattdesl/svg-mesh-3d) and [parse-svg-path](https://www.npmjs.com/package/parse-svg-path).

```js
var svgMesh3d = require('svg-mesh-3d')

var icon = require('svg-camera-icon')
console.log(icon)
//=> "M896 672q119 0 203.5 84.5t84.5 203..."

var mesh = svgMesh3d(icon, { simplify: 0.5 })
console.log(mesh)
//=> { positions: [ [x, y, z], ... ], cells: [ [a, b, c] ] }
```

See [test.js](./test.js) for a rendering example.

Grabbing the SVG file in Node:

```js
var file = require.resolve('svg-camera-icon/camera.svg')
var svg = fs.readFileSync(file, 'utf8')
```

## retro

You can `require('svg-camera-icon/retro')` for an alternative retro version.

<img src="http://i.imgur.com/BA748S9.png" width="25%" />

## Usage

[![NPM](https://nodei.co/npm/svg-camera-icon.png)](https://www.npmjs.com/package/svg-camera-icon)

## License

MIT, see [LICENSE.md](http://github.com/Jam3/svg-camera-icon/blob/master/LICENSE.md) for details.
