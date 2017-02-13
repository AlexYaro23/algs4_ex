import Sorter from './Sorter';

class Quick3Way extends Sorter {
    constructor(arr = []) {
        super(arr);
    }

    sort() {
        let N = this.arr.length;
        this.sortRec(this.arr, 0, N - 1);
    }

    sortRec(arr, lo, hi) {
        if (hi <= lo) return;
        let lt = lo;
        let i = lo + 1;
        let gt = hi;
        let v = arr[lo];
        while (i <= gt) {
            if (arr[i] < v) this.exch(i++, lt++);
            else if (arr[i] > v) this.exch(i, gt--);
            else i++;

        }

        this.sortRec(arr, lo, lt - 1);
        this.sortRec(arr, gt + 1, hi);
    }
}

module.exports = Quick3Way;