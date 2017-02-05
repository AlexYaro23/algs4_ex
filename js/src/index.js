import MergeBU from './sorting/MergeBU';
let fs = require('fs');

const filepath = process.argv.slice(2) + '';

let arr = fs.readFileSync(filepath, 'utf8').split(/[^\d]+/).map((item) => parseInt(item, 10));
arr = arr.filter(item => typeof item == "string" || (typeof item == "number" && item) || typeof item == 'undefined');

console.time('Runtime');
let sort = new MergeBU(arr);
sort.sort();
sort.show();
console.timeEnd('Runtime');