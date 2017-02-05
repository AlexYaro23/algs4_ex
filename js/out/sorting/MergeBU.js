'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Sorter2 = require('./Sorter');

var _Sorter3 = _interopRequireDefault(_Sorter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MergeBU = function (_Sorter) {
    _inherits(MergeBU, _Sorter);

    function MergeBU() {
        var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, MergeBU);

        return _possibleConstructorReturn(this, (MergeBU.__proto__ || Object.getPrototypeOf(MergeBU)).call(this, arr));
    }

    _createClass(MergeBU, [{
        key: 'sort',
        value: function sort() {
            var N = this.arr.length;

            for (var sz = 1; sz < N; sz = sz + sz) {
                for (var lo = 0; lo < N - sz; lo += sz + sz) {
                    this.merge(this.arr, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, N - 1));
                }
            }
        }
    }, {
        key: 'merge',
        value: function merge(arr, lo, mid, hi) {
            var aux = [];
            for (var k = lo; k <= hi; k++) {
                aux[k] = arr[k];
            }

            var i = lo;
            var j = mid + 1;
            for (var _k = lo; _k <= hi; _k++) {
                if (i > mid) arr[_k] = aux[j++];else if (j > hi) arr[_k] = aux[i++];else if (this.less(aux[j], aux[i])) arr[_k] = aux[j++];else arr[_k] = aux[i++];
            }
        }
    }]);

    return MergeBU;
}(_Sorter3.default);

module.exports = MergeBU;