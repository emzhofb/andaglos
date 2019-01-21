/*Logic Challenge - X dan O

Problem
Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function angkan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.


Code
*/
function xo(str) {
  // you can only write your code here!
  let myX = 0;
  let myO = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      myX++;
    } else if (str[i] === 'o') {
      myO++
    }
  }
  if (myX === myO) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true