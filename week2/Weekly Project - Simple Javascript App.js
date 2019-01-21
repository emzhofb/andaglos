const kamu = ['gunting', 'batu', 'kertas'];

function pilihanMu() {
    let index = Math.floor(Math.random() * 3);
    return kamu[index];
}

function pilihanKomputer() {
    let nomorAcak = Math.floor(Math.random() * 3);
    switch (nomorAcak) {
    case 1:
      return 'gunting';
      break;
    case 2:
      return 'batu';
      break;
    default:
      return 'kertas';
      break;
    }
}

function pemenang(kamu, komputer) {
    if (kamu === komputer) {
        return 'Kalian imbang';
    } else {
        if (kamu === 'gunting') {
            if (komputer === 'kertas') {
                return 'Kamu menang!';
            } else {
                return 'Kamu kalah.';
            }
        }
        if (kamu === 'batu') {
            if (komputer === 'gunting') {
                return 'Kamu menang!';
            } else {
                return 'Kamu kalah.';
            }
        }
        if (kamu === 'kertas') {
            if (komputer === 'batu') {
                return 'Kamu menang!';
            } else {
                return 'Kamu kalah.';
            }
        }
    }
}

function ayoMain() {
    const kamuMilih = pilihanMu();
    const komputerMilih = pilihanKomputer();
    console.log('Kamu memilih: ' + kamuMilih);
    console.log('Komputer memilih: ' + komputerMilih);
    console.log(pemenang(kamuMilih, komputerMilih));
}

ayoMain();