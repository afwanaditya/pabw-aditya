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

// daftar proyek sebagai array of object
const daftarProyek = [
  { judul: "GrinCare", tahun: 2026, selesai: true },
  { judul: "RespiraTB", tahun: 2026, selesai: true },
  { judul: "FINATRA NEXUS", tahun: 2026, selesai: false },
];

console.table(profil.keahlian);
console.table(daftarProyek);

// filter proyek yang sudah selesai aja
const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(proyekSelesai);

// find: ambil satu proyek berdasarkan judul
const finatra = daftarProyek.find((proyek) => proyek.judul === "FINATRA NEXUS");
console.log(finatra);

// map: ini ambil judulnya aja
const daftarJudul = daftarProyek.map((proyek) => proyek.judul);
console.log(daftarJudul);

// sort pada salinan, data asli tidak berubah samsek
const urut = [...daftarProyek].sort((a, b) => a.judul.localeCompare(b.judul));
console.table(urut);
console.table(daftarProyek);

console.log(document.querySelector("h1").textContent);
console.log(profil.nama);
const nilaiInput = "8";
console.log(Number(nilaiInput) + 1);