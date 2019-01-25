/*
Logic Challenge - Faktorial (Rekursif)

Problem
Diberikan sebuah function faktorialRekursif(angka) yang menerima satu parameter berupa angka. Function akan me-return hasil faktorial dari angka tersebut. Faktorial adalah pengalian sebuah angka dengan angka itu sendiri dikurangi dengan 1, berturut-turut hingga 1. Wajib menggunakan rekursif untuk berlatih rekursif!

Contoh:

3 faktorial = 3! = 3 * 2 * 1 = 6 4 faktorial = 4! = 4 * 3 * 2 * 1 = 24


Code
*/
function faktorialRekursif(angka) {
    // you can only write your code here!
    if (angka === 1) {
        return 1;
    } else {
        return angka * faktorialRekursif(angka-1);
    }
}

// TEST CASES
console.log(faktorialRekursif(3)); // 6
console.log(faktorialRekursif(4)); // 24
console.log(faktorialRekursif(5)); // 120
console.log(faktorialRekursif(2)); // 2
console.log(faktorialRekursif(1)); // 1