import Merge from './sorting/Merge';
let fs = require('fs');

const filepath = process.argv.slice(2) + '';

let arr = fs.readFileSync(filepath, 'utf8').split(/[^\d]+/).map((item) => parseInt(item, 10));
arr = arr.filter(item => typeof item == "string" || (typeof item == "number" && item));

console.time('Runtime');
let sort = new Merge(arr);
sort.sort();
sort.show();
console.timeEnd('Runtime');