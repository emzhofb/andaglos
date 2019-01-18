/*
Menggunakan Built-in Function pada Array
Array pada JavaScript memiliki sekumpulan built-in function yang digunakan untuk mempermudah developer untuk mengolah data di dalamnya. Beberapa fungsi yang sering digunakan antara lain join, split, slice, splice, dan sort. Kerjakanlah tantangan ini untuk memperkuat pengertian kamu tentang built-in function tersebut.


Objectives
Mengerti Kegunaan dari Built-in Function yang dimiliki Array
Mampu Menggunakan Built-in Function yang dimiliki Array

Directions
//contoh output
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  
Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.
Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.log array yang baru seperti di bawah.
["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  
Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.
Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
Format tanggal pada data adalah dd-mm-YYYY
Misal angka bulan 01, tuliskan "Januari"
Gunakan switch case untuk menuliskan bulan di atas.
Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.
Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.
Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.

Test-case
Untuk memastikan program kamu sudah bekerja dengan benar, gunakan test-case dibawah.

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);


 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * [1989, 21, 05]
 * 21-05-1989
 * Roman Alamsyah
*/

function dataHandling2(params) {
    params.splice(4, 1, 'Pria', 'SMA Internasional Metro');
    params.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung');
    console.log(params);

    var date = params[3].split('/');
    // console.log(Number(date[1]));
    let month = Number(date[1])
    switch (month) {
        case 1:
            month = 'Januari';
            break;
        case 2:
            month = 'Februari';
            break;
        case 3:
            month = 'Maret';
            break;
        case 4:
            month = 'April';
            break;
        case 5:
            month = 'Mei';
            break;
        case 6:
            month = 'Juni';
            break;
        case 7:
            month = 'Juli';
            break;
        case 8:
            month = 'Agustus';
            break;
        case 9:
            month = 'September';
            break;
        case 10:
            month = 'Oktober';
            break;
        case 11:
            month = 'November';
            break;
        case 12:
            month = 'Desember';
            break;
        default:
            month = 'Ga ada bulan segitu';
            break;
    }
    console.log(month);

    var mySort = params[3].split('/');
    mySort.sort(function (a, b) {
        return b - a;
    });
    console.log(mySort);

    var myJoin = date.join('-');
    console.log(myJoin);

    var mySlice = params[1].slice(0, 14);
    return mySlice;
}

const input = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'];
console.log(dataHandling2(input));