/*
Logic Challenge - Hitung Huruf

Problem
Diberikan function hitungHuruf(kalimat) yang akan menerima satu parameter berupa string. Function akan me-return kata dari kalimat yang memiliki jumlah perulangan huruf yang paling besar. Contoh: "Today, is the greatest day ever!" akan me-return "greatest" karena kata "greatest" memiliki 2 huruf e dan 2 huruf t, dan muncul lebih dulu. Jika tidak ditemukan kalimat dengan kata yang memiliki huruf berulang, return -1.


Code
*/
function hitungHuruf(kata) {
    // you can only write your code here!
    let mySplit = [];
    temp = '';
    for (let i = 0; i < kata.length; i++) {
        temp += kata[i];
        if (kata[i] === ' ') {
            mySplit.push(temp);
            temp = '';
        }
    }
    let lastWord = '';
    for (let i = 0; i < kata.length; i++) {
        if (kata[i] !== ' ') {
            lastWord += kata[i];
        } else if (kata[i] === ' ') {
            lastWord = '';
        }
    }
    mySplit.push(lastWord);
    for (let i = 0; i < mySplit.length; i++) {
        for (let j = 0; j < mySplit[i].length; j++) {
            let counterWord = 0;
            for (let k = 0; k < mySplit[i].length; k++) {
                console.log(mySplit[i])
                if (mySplit[i][j] === mySplit[i][k]) {
                    counterWord++;
                }
                if (counterWord >= 2) {
                    return mySplit[i];
                }
            }
        }
    }
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau