'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Sorter2 = require('./Sorter');

var _Sorter3 = _interopRequireDefault(_Sorter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Quick3Way = function (_Sorter) {
    _inherits(Quick3Way, _Sorter);

    function Quick3Way() {
        var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, Quick3Way);

        return _possibleConstructorReturn(this, (Quick3Way.__proto__ || Object.getPrototypeOf(Quick3Way)).call(this, arr));
    }

    _createClass(Quick3Way, [{
        key: 'sort',
        value: function sort() {
            var N = this.arr.length;
            this.sortRec(this.arr, 0, N - 1);
        }
    }, {
        key: 'sortRec',
        value: function sortRec(arr, lo, hi) {
            if (hi <= lo) return;
            var lt = lo;
            var i = lo + 1;
            var gt = hi;
            var v = arr[lo];
            while (i <= gt) {
                if (arr[i] < v) this.exch(i++, lt++);else if (arr[i] > v) this.exch(i, gt--);else i++;
            }

            this.sortRec(arr, lo, lt - 1);
            this.sortRec(arr, gt + 1, hi);
        }
    }]);

    return Quick3Way;
}(_Sorter3.default);

module.exports = Quick3Way;