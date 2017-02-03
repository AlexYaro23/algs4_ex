'use strict';

var _Merge = require('./sorting/Merge');

var _Merge2 = _interopRequireDefault(_Merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');

var filepath = process.argv.slice(2) + '';

var arr = fs.readFileSync(filepath, 'utf8').split(/[^\d]+/).map(function (item) {
  return parseInt(item, 10);
});
arr = arr.filter(function (item) {
  return typeof item == "string" || typeof item == "number" && item;
});

console.time('Runtime');
var sort = new _Merge2.default(arr);
sort.sort();
sort.show();
console.timeEnd('Runtime');