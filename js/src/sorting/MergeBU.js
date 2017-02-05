import Sorter from './Sorter';

class MergeBU extends Sorter {
    constructor(arr = []) {
        super(arr);
    }

    sort() {
        let N = this.arr.length;

        for (let sz = 1; sz < N; sz = sz + sz) {
            for (let lo = 0; lo < N - sz; lo += sz + sz) {
                this.merge(this.arr, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, N - 1));
            }
        }
    }

    merge(arr, lo, mid, hi) {
        let aux = [];
        for (let k = lo; k <= hi; k++) {
            aux[k] = arr[k];
        }

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

module.exports = MergeBU;