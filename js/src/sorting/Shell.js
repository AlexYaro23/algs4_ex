import Sorter from './Sorter';

class Shell extends Sorter {
    constructor(arr = []) {
        super(arr);
    }

    sort() {
        let N = this.arr.length;
        let h = 1;
        while (h < N/3 ) {
            h = Math.floor(3*h + 1);
        }

        while (h >= 1) {
            for (let i = h; i < N; i++) {
                for (let j = i; j >= h && this.less(this.arr[j], this.arr[j-h]); j -= h) {
                    this.exch(j, j-h);
                }
            }

            h = Math.floor(h/3);
        }
    }
}

module.exports = Shell;