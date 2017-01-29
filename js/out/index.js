'use strict';

var _Shell = require('./sorting/Shell');

var _Shell2 = _interopRequireDefault(_Shell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');

var filepath = process.argv.slice(2) + '';

var arr = fs.readFileSync(filepath, 'utf8').split(/[^\d]+/).map(function (item) {
  return parseInt(item, 10);
});
console.time('Runtime');
var sort = new _Shell2.default(arr);
sort.sort();
sort.show();
console.timeEnd('Runtime');