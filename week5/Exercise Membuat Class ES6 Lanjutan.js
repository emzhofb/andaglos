/*
Membuat ES6 Class Lanjutan

Objectives
Mampu memanfaatkan Class pada ES6 untuk membangun object JavaScript

Directions
Ubah kasus dibawah ini ke dalam bentuk ES6 Class.

Tugas
Buatlah sebuah Class Student, yang memiliki atribut berikut:

Name,
Age,
Date of Birth,
Gender
Student ID (bisa berupa angka atau teks), dan
Hobbies (bisa menampung lebih dari 1 hobi).
Class tersebut juga bisa memanggil fungsi dengan proses sebagai berikut:

SetName: mengubah nama student dengan mengirimkan satu parameter ke dalam fungsi berupa teks
SetAge: mengubah umur student dengan mengirimkan satu parameter ke dalam fungsi berupa angka
SetDateOfBirth: mengubah tanggal lahir student dengan mengirimkan satu parameter ke dalam fungsi berupa teks
SetGender: mengubah gender student dengan mengirimkan satu parameter ke dalam fungsi berupa teks, dan hanya bisa menerima nilai Male atau Female
addHobby: menambah hobi dengan mengirimkan satu parameter ke dalam fungsi berupa teks
removeHobby: menghapus list hobi yang ada dengan mengirimkan satu parameter berupa teks, yang merupakan hobi apa yang akan dihapus
getData: menampilkan seluruh data atribut murid
*/

class student {
    constructor (name, age, birth, gender, studentID, hobbies) {
        this.name = name;
        this.age = age;
        this.birth = birth;
        this.gender = gender;
        this.studentID = studentID;
        this.hobbies = hobbies;
    }

    setName (newName) {
        if (this.name === String) {
            this.name = newName;
        }
    }

    setAge (newAge) {
        if (this.age === Number) {
            this.age = newAge;
        }
    }

    setBirth (newBirth) {
        if (this.birth === String) {
            this.birth = newBirth;
        }
    }
    
    setGender (newGender) {
        this.gender = newGender;
    }

    setAddHobby (newAddHobby) {
        this.hobbies.push(newAddHobby);
    }

    setRemoveHobby (newRemoveHobby) {
        this.hobbies.pop(newRemoveHobby);
    }
    
    getName () {
        return this.name;
    }
    
    getAge () {
        return this.age;
    }
    
    getBirth () {
        return this.birth;
    }

    getHobbies () {
        return this.hobbies;
    }

    getData () {
        const theStudent = 'Name : ' + this.name + ', Age : ' + this.age + ', Date of Birth : ' + this.birth + ', Hobbies : ' + this.hobbies + '.';
        return theStudent;
    }
}

let name = 'Roronoa Zoro';
let age =  22;
let birth = '11-November-1997';
let gender = 'Male';
let studentID = 'Santoryuu';
let hobbies = ['Sleeping', 'Gym', 'Get lost'];

const theStudent = new student (name, age, birth, gender, studentID, hobbies);

console.log(theStudent.getData());