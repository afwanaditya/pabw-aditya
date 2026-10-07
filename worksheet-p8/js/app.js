const profil = {
  nama: "Afwan Aditya Saputra",
  peran: "Mahasiswa Informatika yang aktif ikut kompetisi business case",
  keahlian: ["Business Case", "Pitching", "Javascript", "Integrasi AI"],
};

const jumlahProyek = 3; // angka, bukan "3"
let pilihanAktif = "semua"; // nanti berubah saat disaring

// cek tipe data
console.log(typeof profil.nama);
console.log(typeof jumlahProyek); 


const kalimat = `Nama saya ${profil.nama}, dan saya punya ${profil.keahlian.length} keahlian.`;
console.log(kalimat);
console.log(`Pilihan aktif: ${pilihanAktif}`);


const kota = profil.alamat?.kota ?? "belum diisi";
console.log(`Kota: ${kota}`);


function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}


const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));


console.log(buatPerkenalan({ nama: "Budi", peran: "Mahasiswa Desain" }));
console.log(formatKeahlian(["HTML", "CSS"]));
