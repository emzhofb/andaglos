/*
Tugas 2
Buatlah sebuah code yang melakukan filter ke array menggunakan filter!
*/
let arr = [1, 5, 12, 15, 20]
var filterArrUnder10 = arr.filter( isiArray => {
    // Filter setiap element array yang nilainya dibawah 10, sisakan yang 10 ke atas!
    return isiArray > 10;
});

console.log(filterArrUnder10); // [12, 15, 20]