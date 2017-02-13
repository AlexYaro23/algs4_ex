'use strict';

var _Quick3Way = require('./sorting/Quick3Way');

var _Quick3Way2 = _interopRequireDefault(_Quick3Way);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');

var filepath = process.argv.slice(2) + '';

var arr = fs.readFileSync(filepath, 'utf8').split(/[^\d]+/).map(function (item) {
  return parseInt(item, 10);
});
arr = arr.filter(function (item) {
  return typeof item == "string" || typeof item == "number" && item || typeof item == 'undefined';
});

console.time('Runtime');
var sort = new _Quick3Way2.default(arr);
sort.sort();
sort.show();
console.timeEnd('Runtime');