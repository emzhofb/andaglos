/*
Logic Challenge - Ubah Kapital

Problem
Diberikan function ubahKapital(kalimat) yang menerima satu parameter berupa string. Function akan me-return nilai berupa kalimat dimana setiap kata dimulai dengan huruf besar. Contoh, jika input adalah "saya makan sushi", maka output adalah "Saya Makan Sushi".


Code
*/
function ubahKapital(kalimat) {
    // you can only write your code here!
    let mySplit = [];
    let temp = '';
    for (let i = 0; i < kalimat.length; i++) {
        temp += kalimat[i];
        if (kalimat[i] === ' ') {
            mySplit.push(temp);
            temp = '';
        }
    }
    let lastWord = '';
    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] === ' ') {
            lastWord = '';
        } else {
            lastWord += kalimat[i];
        }
    }
    mySplit.push(lastWord);
    let result = '';
    for (let i = 0; i < mySplit.length; i++) {
        for (let j = 0; j < mySplit[i].length; j++) {
            if (j === 0) {
                result += mySplit[i][j].toUpperCase();
            } else {
                result += mySplit[i][j];
            }
        }
    }
    return result;
}

// TEST CASES
console.log(ubahKapital('saya makan sushi')); // Saya Makan Sushi
console.log(ubahKapital('programming adalah hobi saya')); // Programming Adalah Hobi Saya
console.log(ubahKapital('menjadi developer adalah cita-cita saya')); // Menjadi Developer Adalah Cita-cita Saya
console.log(ubahKapital('i have a dream')); // I Have A Dream
console.log(ubahKapital('coding is fun')); // Coding Is Fun