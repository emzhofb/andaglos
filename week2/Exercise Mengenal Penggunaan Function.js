/*
Mengenal Penggunaan Function

Objectives

    Mampu memahami serta mengimplementasi penggunaan function pada JavaScript


Directions

    Lanjutkan kode berikut ini hingga dapat menampilkan nilai / output yang diminta!


Tugas 1

Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", yang kemudian akan ditampilkan di console.
*/
/*
 BUATLAH KODE FUNCTION DISINI
*/
/*
console.log(shoutOut()) // Menampilkan "Halo Function!" di console


Tugas 2

Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari dua parameter yang dikirim.
*/
/*
 BUATLAH KODE FUNCTION DISINI
*/
/*
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30


Tugas 3

Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi satu kalimat berikut: "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"
*/
/*
 BUATLAH KODE FUNCTION DISINI
*/
/*
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
*/

// 1

function shoutOut() {
    return 'Halo Function!'
}

console.log ( shoutOut () )

// 2

const calculateMultiply = (parameter1, parameter2) => parameter1 * parameter2;

const num1 = 5;
const num2 = 6;

const hasilPerkalian = calculateMultiply(num1, num2);
console.log ( hasilPerkalian );

// 3

const processSentence = (param1, param2, param3, param4) => 'Nama saya ' + param1 + ', umur saya ' + param2 + ' tahun, alamat saya di ' + param3 + ', dan saya punya hobby yaitu ' + param4 + '!';

const name = 'Agus';
const age = 30;
const address = 'Jln. Malioboro, Yogjakarta';
const hobby = 'gaming';

const fullSentence = processSentence(name, age, address, hobby);
console.log( fullSentence );