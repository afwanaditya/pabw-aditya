// data profil sebagai variabel
const profil = {
  nama: "Afwan Aditya Saputra",
  peran: "Mahasiswa Informatika yang aktif ikut kompetisi business case",
  keahlian: ["Business Case", "Pitching", "Javascript", "Integrasi AI"],
};

const jumlahProyek = 3; // angka, bukan "3"
let pilihanAktif = "semua"; // nanti berubah saat disaring

// cek tipe data
console.log(typeof profil.nama); // "string"
console.log(typeof jumlahProyek); // "number"

// kalimat dari template literal
const kalimat = `Nama saya ${profil.nama}, dan saya punya ${profil.keahlian.length} keahlian.`;
console.log(kalimat);
console.log(`Pilihan aktif: ${pilihanAktif}`);

// akses aman ?. dan nilai bawaan ??
const kota = profil.alamat?.kota ?? "belum diisi";
console.log(`Kota: ${kota}`);