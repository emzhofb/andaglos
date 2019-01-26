/*
Menggunakan Object Literal

Objectives
Mengerti Cara Membuat Object dengan Object literal

Directions
Merujuk ke soal Menyusun Class ES6 Lanjutan, buatlah object dengan object literal dengan bentuk yang serupa dengan object yang dibuat oleh class yang kita buat di tugas tersebut!
*/

let myObj = {
    name : 'Roronoa Zoro',
    age : 22,
    dateOfBirth : '11 November 1997',
    hobbies : ['Sleeping', 'Gym', 'Get lost']
}

const result = 'Nama : ' + myObj.name + ', Age : ' + myObj.age + ', Date of Birth : ' + myObj.dateOfBirth + ', Hobbies : ' + myObj.hobbies[0] + ', ' + myObj.hobbies[1] + ', ' + myObj.hobbies[2] + '.';

console.log(result);