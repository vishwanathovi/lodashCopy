import {
  chunk,
  compact,
  concat,
  difference
} from './functions.js';

const $v = {
  chunk,
  compact,
  concat,
  difference
}


console.log($v.chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
console.log($v.compact([undefined, 2, NaN, 4, 5, "", 7, null, false, 10]));
console.log($v.concat([1, 2, 3], 1, "Hello", [3], [
  [4]
]));
console.log($v.difference([1, 2, 3, 4], [2, 3]));