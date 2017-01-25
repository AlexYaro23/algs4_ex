'use strict';

var _Selection = require('./sorting/Selection');

var _Selection2 = _interopRequireDefault(_Selection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');

var filepath = process.argv.slice(2) + '';

var arr = fs.readFileSync(filepath, 'utf8').split(/[^\d]+/).map(function (item) {
  return parseInt(item, 10);
});
console.time('test');
var sort = new _Selection2.default(arr);
sort.sort();
sort.show();
console.timeEnd('test');