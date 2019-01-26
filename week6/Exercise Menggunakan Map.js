/*
Tugas 1
Buatlah sebuah code yang mentransformasi array menggunakan map!
*/

let arr = ['BUDI', 'MArNi', 'mukIDi'];
var transformArrToLowerCase = arr.map( isiArray => {
    // Ubah setiap element array menjadi lowercase!
    return isiArray.toLowerCase();
});

console.log(transformArrToLowerCase); // ['budi', 'marni', 'mukidi']