// local dependency/module/package - use it only in this particular project
//npm i <package name>

// global dependency - use it in any project
// npm install -g <packagename>
// sudo npm install  -g <package name>

// package.json - manifest file (stores important info about projection/package)
//manual approach make and write yourself in rooy all properties etc
//npm init
// npm init -y

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)