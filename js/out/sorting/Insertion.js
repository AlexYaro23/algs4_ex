'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Sorter2 = require('./Sorter');

var _Sorter3 = _interopRequireDefault(_Sorter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Insertion = function (_Sorter) {
    _inherits(Insertion, _Sorter);

    function Insertion() {
        var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, Insertion);

        return _possibleConstructorReturn(this, (Insertion.__proto__ || Object.getPrototypeOf(Insertion)).call(this, arr));
    }

    _createClass(Insertion, [{
        key: 'sort',
        value: function sort() {
            var N = this.arr.length;
            for (var i = 1; i < N; i++) {
                for (var j = i; j > 0 && this.less(this.arr[j], this.arr[j - 1]); j--) {
                    this.exch(j, j - 1);
                }
            }
        }
    }]);

    return Insertion;
}(_Sorter3.default);

module.exports = Insertion;