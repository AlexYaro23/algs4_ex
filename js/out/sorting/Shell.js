'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Sorter2 = require('./Sorter');

var _Sorter3 = _interopRequireDefault(_Sorter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shell = function (_Sorter) {
    _inherits(Shell, _Sorter);

    function Shell() {
        var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, Shell);

        return _possibleConstructorReturn(this, (Shell.__proto__ || Object.getPrototypeOf(Shell)).call(this, arr));
    }

    _createClass(Shell, [{
        key: 'sort',
        value: function sort() {
            var N = this.arr.length;
            var h = 1;
            while (h < N / 3) {
                h = Math.floor(3 * h + 1);
            }

            while (h >= 1) {
                for (var i = h; i < N; i++) {
                    for (var j = i; j >= h && this.less(this.arr[j], this.arr[j - h]); j -= h) {
                        this.exch(j, j - h);
                    }
                }

                h = Math.floor(h / 3);
            }
        }
    }]);

    return Shell;
}(_Sorter3.default);

module.exports = Shell;