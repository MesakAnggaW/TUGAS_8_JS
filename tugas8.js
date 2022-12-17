let mobil = {
    type: "Sedan",
    Nama: "Audi A8",
    Warna: "Putih",
    Author: "Mesak Angga Wibisono",
    Tahun: [2022, 2021]
}

mobil.Torsi = "2500HP"

console.log(mobil.type);
console.log(mobil.Nama);
console.log(mobil.Warna);
console.log(mobil.Author);
console.log(mobil.Tahun[0]);

mobil.Nama = "Rolls Royce"

console.log("------------");

console.log(mobil.Nama);