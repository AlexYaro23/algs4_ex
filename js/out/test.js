'use strict';

var _Selection = require('./sorting/Selection');

var _Selection2 = _interopRequireDefault(_Selection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sort = new _Selection2.default([1, 7, 8, 4, 5, 6]);
sort.sort();
sort.show();