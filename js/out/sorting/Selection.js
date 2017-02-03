'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Sorter2 = require('./Sorter');

var _Sorter3 = _interopRequireDefault(_Sorter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Merge = function (_Sorter) {
    _inherits(Merge, _Sorter);

    function Merge() {
        var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, Merge);

        var _this = _possibleConstructorReturn(this, (Merge.__proto__ || Object.getPrototypeOf(Merge)).call(this, arr));

        _this.aux = [];
        return _this;
    }

    _createClass(Merge, [{
        key: 'sort',
        value: function sort() {
            this.sortRec(0, this.arr.length);
        }
    }, {
        key: 'sortRec',
        value: function sortRec(lo, hi) {
            if (hi <= lo) return;
            var mid = lo + (hi - lo) / 2;
            this.sortRec(lo, mid);
            this.sortRec(mid + 1, hi);
            merge(lo, mid, hi);
        }
    }, {
        key: 'merge',
        value: function merge(lo, mid, hi) {
            for (var k = lo; k < hi; k++) {
                this.aux[k] = a[k];
            }

            var i = lo;
            var j = mid + 1;
            for (var _k = lo; _k <= hi; _k++) {
                if (i > mid) {
                    this.a[_k] = this.aux[j++];
                } else if (j > hi) {
                    this.a[_k] = this.aux[i++];
                } else if (this.less(this.a[j], this.aux[i])) {
                    this.a[_k] = this.aux[j++];
                } else {
                    this.a[_k] = this.aux[i++];
                }
            }
        }
    }]);

    return Merge;
}(_Sorter3.default);

module.exports = Merge;