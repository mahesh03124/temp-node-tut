//npm global commands

//npm local dependency
//npm i <package name>

//npm --v

//global dependency
//npm install -g <packagename>
//sudo npm install -g <packagename> (mac)


const _ = require('lodash');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)