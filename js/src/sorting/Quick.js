import Sorter from './Sorter';

class Quick extends Sorter {
    constructor(arr = []) {
        super(arr);
    }

    sort() {
        this.sortRec(0, this.arr.length - 1);
    }

    sortRec(lo, hi) {
        if (hi <= lo) return;
        const j = this.partition(lo, hi);
        this.sort(lo, j - 1);
        this.sort(j + 1, hi);
    }

    partition(lo, hi) {
        let i = lo;
        let j = hi + 1;
        const v = this.arr[lo];

        while (true) {
            while(this.less(this.arr[++i], v)) if (i == hi) break;
            while(this.less(v, this.arr[--j])) if (j == lo) break;
            if (i >= j) break;
            this.exch(i, j);
        }

        this.exch(lo, j);

        return j;
    }

}

module.exports = Quick;