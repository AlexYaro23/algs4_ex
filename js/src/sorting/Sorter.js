class Sorter {
    constructor(arr = []) {
        this.arr = arr;
    }

    less(i, j) {
        return i < j;
    }

    exch(i, j) {
        let temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }

    show() {
        for (let i = 0; i < this.arr.length; i++) {
            console.log(this.arr[i] + ' ');
        }
    }
}

module.exports = Sorter;