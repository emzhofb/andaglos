/*
Membuat ES6 Class Sederhana

Objectives
Mampu memanfaatkan Class pada ES6 untuk membangun object JavaScript

Directions
Ubah kasus dibawah ini ke dalam bentuk ES6 Class.

Tugas
Buatlah sebuah Class Mobil, yang memiliki atribut berikut:

Merek,
Harga,
Warna,
Bensin, dan
Jumlah Roda.
Class tersebut juga bisa memanggil function dengan proses sebagai berikut:

tampilkanSpesifikasi: menampilkan melalui console.log merek, harga, warna, bensin, dan jumlah roda dengan format berikut:
"Mobil saya bermerek Hando dengan harga 300000000 rupiah, berwarna merah, bensinnya solar, dan beroda 4".

jualMobil: menampilkan melalui console.log harga mobil yang dikurangi 20%.
*/

class mobil {
    constructor (merek, harga, warna, bensin, jumlahRoda) {
        this.merek = merek;
        this.harga = harga;
        this.warna = warna;
        this.bensin = bensin;
        this.jumlahRoda = jumlahRoda;
    }

    setMerek (newMerek) {
        this.merek = newMerek;
    }

    setHarga (newHarga) {
        this.harga = newHarga;
    }
    
    setWarna (newWarna) {
        this.warna = newWarna;
    }

    setBensin (newBensin) {
        this.bensin = newBensin;
    }

    setJumlahRoda (newJumlahRoda) {
        this.jumlahRoda = newJumlahRoda;
    }

    getMerek () {
        return this.merek;
    }

    getHarga() {
        return this.harga;
    }

    getWarna () {
        return this.warna;
    }

    getBensin () {
        return this.bensin;
    }

    getJumlahRoda () {
        return this.jumlahRoda;
    }

    getArea () {
        let area = 'Mobil saya bermerek ' + this.merek + ' dengan harga ' + this.harga + ' rupiah, berwarna ' + this.warna + ', bensinnya ' + this.bensin + ', dan beroda ' + this.jumlahRoda;
        return area;
    }
}

const myCar = new mobil();

const merek = 'Hando';
const harga = 300000000;
const warna = 'merah';
const bensin = 'solar';
const jumlahRoda = 4;

myCar.setMerek(merek);
myCar.setHarga(harga);
myCar.setWarna(warna);
myCar.setBensin(bensin);
myCar.setJumlahRoda(jumlahRoda);

console.log(myCar.getArea());

console.log('----------------------------------');

class jualMobil {
    constructor (harga) {
        this.jual = harga;
    }

    setJual (newJual) {
        this.jual = newJual;
    }

    getJual () {
        return this.jual;
    }

    getArea () {
        let area = 'Harga mobilnya adalah = ' + (this.jual - (this.jual * 0.2));
        return area;
    }
}

const myMobil = new jualMobil();

myMobil.setJual(harga);

console.log(myMobil.getArea());