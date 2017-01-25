import Sorter from './Sorter';

class Selection extends Sorter {
    constructor(arr = []) {
        super(arr);
    }

    sort() {
        let N = this.arr.length;
        for (let i = 0; i < N; i++) {
            let min = i;
            for (let j = i+1; j < N; j++) {
                if (this.less(this.arr[j], this.arr[min])) {
                    min = j;
                }
            }

            this.exch(i, min);
        }
    }
}

module.exports = Selection;