/*
Tugas 3
Buatlah sebuah code yang mendapatkan nilai terbesar menggunakan reduce!
*/

let arr = [5, 1, 7, 6, 9];
var reduceFindMaximum = arr.reduce ( isiAraray => {
    // kembalikan sebuah nilai yang mengandung angka terbesar dengan reduce!
    arr.sort();
    return arr[arr.length-1];
});

console.log(reduceFindMaximum); // 9