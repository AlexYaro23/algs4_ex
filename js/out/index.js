'use strict';

var _Quick = require('./sorting/Quick');

var _Quick2 = _interopRequireDefault(_Quick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');

var filepath = process.argv.slice(2) + '';

var arr = fs.readFileSync(filepath, 'utf8').split(/[^\d]+/).map(function (item) {
  return parseInt(item, 10);
});
console.time('Runtime');
var sort = new _Quick2.default(arr);
sort.sort();
sort.show();
console.timeEnd('Runtime');