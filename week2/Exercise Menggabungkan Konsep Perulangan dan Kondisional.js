/*
Proxytia to Next Level

Objectives

    Mampu menggunakan variabel dengan benar
    Mampu melakukan operasi aritmatika pada JavaScript
    Mampu mengimplimentasikan perulangan menggunakan for atau while
    Mampu mengimplimentasikan if-else if-else dan mengerti logikanya


Directions

Masih ingat dengan Proxytia? game yang pernah kamu buat pada tugas sebelumnya. Pada challenge kali ini kamu ditantang untuk mengembangkan game ini lebih lanjut. Ada beberapa perubahan yang akan perlu kamu lakukan agar game ini dapat dimainkan. Perhatikan langkah-langkahnya sebagai berikut:

    Tambahkan variabel tahunLahir, variabel ini akan diisi dengan tahun lahir pemain.
    Isi variabel umur sekarang adalah 2017 - tahunLahir.
    Tambahkan variabel playerHealth, assign variabel ini dengan tahunLahir X Math.random()
    Tambahkan variabel monsterHealth, assign variabel ini dengan tahunLahir X Math.random()
    Tambahkan variabel kodeMonster, assign variabel ini dengan Math.floor(Math.pow(100, Math.random()))
    Pada logika if terhadap variabel nama, apabila pemain tidak mengisi variabel, assign variabel peran dengan kacung
    Setelah semua pengecekan menggunakan if selesai dilakukan, lakukan perulangan sebanyak tahunLahir.
    Di dalam perulangan tersebut, buat sebuah logika if-else untuk melakukan pengecekan sebagai berikut:

    jika indeks perulangan adalah kelipatan umur:
    console.log(peran + ' ' + nama + ' menyerang monster!')
    Kurangi monsterHealth dengan umur
    jika indeks perulangan adalah kelipatan kodeMonster:
    console.log('monster menyerang ' + peran + ' ' + nama + '!')
    Kurangi playerHealth dengan kodeMonster
    jika indeks perulangan adalah kelipatan umur dan kodeMonster sekaligus:
    console.log('Health keduanya bertambah')
    Tambahkan playerHealth dengan kodeMonster
    Tambahkan monsterHealth dengan umur

    Jika playerHealth lebih besar daripada monsterHealth:

    console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!')
    Jika sebaliknya, console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...')
*/

const nama = 'Zoro';
let peran = 'Penyihir';
let tahunLahir = 1999;
const umur = 2017 - tahunLahir;
let playerHealth = tahunLahir * Math.random();
let monsterHealth = tahunLahir * Math.random();
const kodeMonster = Math.floor(Math.pow(100, Math.random()));

if ( nama === '' ) {
    peran = 'Kacung';
} else if ( nama !== '' && peran === '' ) {
    console.log ( 'Halo ' + nama + ', Pilih peranmu untuk memulai game!' );
} else if ( nama !== '' && peran === 'Ksatria' ) {
    console.log ( 'Selamat datang di Dunia Proxytia, ' + nama + '\n' + 'Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!' );
} else if ( nama !== '' && peran === 'Tabib' ) {
    console.log ( 'Selamat datang di Dunia Proxytia, ' + nama + '\n' + 'Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka.' );
} else if ( nama !== '' && peran === 'Penyihir' ) {
    console.log ( 'Selamat datang di Dunia Proxytia, ' + nama + '\n' + 'Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!' );
}

for ( let i = 1; i <= tahunLahir; i++ ) {
    if ( i % umur === 0 ) {
        console.log(peran + ' ' + nama + ' menyerang monster!');
    } else if ( i % kodeMonster === 0 ) {
        console.log('monster menyerang ' + peran + ' ' + nama + '!');
        playerHealth -= kodeMonster;
    } else if ( i % umur === 0 && i % kodeMonster === 0 ) {
        console.log('Health keduanya bertambah');
        playerHealth += kodeMonster;
        monsterHealth += umur;
    }
}

if ( playerHealth > monsterHealth ) {
    console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
} else {
    console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
}