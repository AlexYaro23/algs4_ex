import Shell from './sorting/Shell';
let fs = require('fs');

const filepath = process.argv.slice(2) + '';

let arr = fs.readFileSync(filepath, 'utf8').split(/[^\d]+/).map((item) => parseInt(item, 10));
console.time('Runtime');
let sort = new Shell(arr);
sort.sort();
sort.show();
console.timeEnd('Runtime');