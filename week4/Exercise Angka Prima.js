/*
Logic Challenge - Angka Prima

Problem
Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.


Code
*/
function angkaPrima(angka) {
    // you can only write your code here!
    let flag = true;
    for (let i = 2; i < angka; i++) {
        if (angka % i === 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false