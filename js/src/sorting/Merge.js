import Sorter from './Sorter';

class Merge extends Sorter {
    constructor(arr = []) {
        super(arr);
    }

    sort() {
        this.sortRec(0, this.arr.length-1);
    }

    sortRec(lo, hi) {
        if (hi <= lo) return;
        const mid = Math.floor(lo + ((hi - lo) / 2));
        this.sortRec(lo, mid);
        this.sortRec(mid+1, hi);
        this.merge(this.arr, lo, mid, hi);
    }

    merge(arr, lo, mid, hi) {
        const aux = arr.slice();

        let i = lo;
        let j = mid+1;
        for (let k = lo; k <= hi; k++) {
            if (i > mid)                        arr[k] = aux[j++];
            else if (j > hi)                    arr[k] = aux[i++];
            else if (this.less(aux[j], aux[i])) arr[k] = aux[j++];
            else                                arr[k] = aux[i++];

        }
    }
}

module.exports = Merge;