"use strict";

var _from = require("babel-runtime/core-js/array/from");

var _from2 = _interopRequireDefault(_from);

require("babel-polyfill");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _from2.default)('aaa'));
var square = function square(n) {
  return n * n;
};
console.log("====");
var sum = function sum(a, b) {
  return a + b;
};
var x = sum(1, 2);
console.log(x);
Object.assigin();