import Sorter from './Sorter';

class Insertion extends Sorter {
    constructor(arr = []) {
        super(arr);
    }

    sort() {
        let N = this.arr.length;
        for (let i = 1; i < N; i++) {
            for (let j = i; j >0 &&  this.less(this.arr[j], this.arr[j-1]); j--) {
                this.exch(j, j-1);
            }
        }
    }
}

module.exports = Insertion;