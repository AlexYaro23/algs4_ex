'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sorter = function () {
    function Sorter() {
        var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        _classCallCheck(this, Sorter);

        this.arr = arr;
    }

    _createClass(Sorter, [{
        key: 'less',
        value: function less(i, j) {
            return i < j;
        }
    }, {
        key: 'exch',
        value: function exch(i, j) {
            var temp = this.arr[i];
            this.arr[i] = this.arr[j];
            this.arr[j] = temp;
        }
    }, {
        key: 'show',
        value: function show() {
            for (var i = 0; i < this.arr.length; i++) {
                console.log(this.arr[i] + ' ');
            }
        }
    }]);

    return Sorter;
}();

module.exports = Sorter;