const modal = 1000000000;
masa = 2;

const deposito = 350000000;
keuntungan = 3,5;

const sisa = 650000000;

const obligasi = 30/100;
keuntungan2 = 13/100;

const sahamA = 35/100;
keuntungan3 = 14,5/100;

const sahamB = 35/100;
keuntungan4 = 12,5/100;

function dataDeposito(deposito, keuntungan, masa) {

    var deposito;
    var keuntungan;
    var masa;
    var income;

    deposito = 350000000;
    keuntungan = 3.5;
    persen = 100
    masa = 2;

    income = deposito * keuntungan/persen * masa;
    return income;
}
// Keuntungan selama 2 Tahun Investasi Deposito

function dataObligasi(sisa, obligasi, keuntungan2, masa) {

    var sisa;
    var obligasi;
    var keuntungan2;
    var masa;
    var income2;

    sisa = 650000000;
    obligasi = 30;
    keuntungan2 = 13;
    persen = 100;
    masa = 2;

    income2 = sisa * obligasi/persen * keuntungan2/persen * masa;
    return income2;
}
// Keuntungan selama 2 Tahun Investasi Obligasi

function dataSahamA(sisa, sahamA, keuntungan3, masa) {

    var sisa;
    var sahamA;
    var keuntungan3;
    var masa;
    var income3;

    sisa = 650000000;
    sahamA = 35;
    keuntungan3 = 14.5;
    persen = 100;
    masa = 2;

    income3 = sisa * sahamA/persen * keuntungan3/persen * masa;
    return income3;
}
// Keuntungan selama 2 Tahun Investasi Saham-A

function dataSahamB(sisa, sahamB, keuntungan4, masa) {

    var sisa;
    var sahamB;
    var keuntungan4;
    var masa;
    var income4;

    sisa = 650000000;
    sahamB = 35;
    keuntungan4 = 12.5;
    persen = 100;
    masa = 2;

    income4 = sisa * sahamB/persen * keuntungan4/persen * masa;
    return income4;
}
// Keuntungan selama 2 Tahun Investasi Saham-B

console.log(modal + dataDeposito() + dataObligasi() + dataSahamA() + dataSahamB());
// Modal = 1.000.000.000
// Keuntungan 2 tahun = 198.050.000
// Total Asset = 1.198.050.000