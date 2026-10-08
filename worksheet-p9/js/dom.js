import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const kosong = document.querySelector("#pesan-kosong");
const barisFilter = document.querySelector("#filter");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul; // teks, bukan HTML
  return li;
}

function render(daftar) {
  wadah.textContent = ""; // 1. kosongkan lebih dulu
  if (daftar.length === 0) { // 2. periksa keadaan kosong
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek))); // 3. isi ulang
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// satu pendengar di induk untuk semua tombol filter
barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return; // klik di luar tombol, abaikan
  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );
  tandaiTombolAktif(tombol);
  render(terpilih);
});

render(daftarProyek);

// ===== validasi form tambah game =====
const formTambah = document.querySelector("#tambah-game form");
const inputJudul = document.querySelector("#judul-game");
const inputTanggal = document.querySelector("#tanggal-selesai");
const inputRating = document.querySelector("#rating");
const tombolKirim = formTambah.querySelector('button[type="submit"]');

// aturan tiap kolom
const aturan = [
  { kolom: inputJudul, cek: (nilai) => nilai.trim().length >= 2 },
  { kolom: inputTanggal, cek: (nilai) => nilai !== "" },
  {
    kolom: inputRating,
    cek: (nilai) => nilai.trim() !== "" && Number(nilai) >= 1 && Number(nilai) <= 10,
  },
];

// periksa satu kolom, tandai kalau salah
function periksaKolom({ kolom, cek }) {
  const sah = cek(kolom.value);
  if (sah) {
    kolom.removeAttribute("aria-invalid");
  } else {
    kolom.setAttribute("aria-invalid", "true");
  }
  return sah;
}

// cek semua kolom tanpa menandai
function semuaLayak() {
  return aturan.every(({ kolom, cek }) => cek(kolom.value));
}

// validasi saat mengetik
aturan.forEach((item) => {
  item.kolom.addEventListener("input", () => {
    periksaKolom(item);
    tombolKirim.disabled = !semuaLayak();
  });
});

// saat form dikirim
formTambah.addEventListener("submit", (event) => {
  event.preventDefault(); // halaman tidak dimuat ulang
  const hasil = aturan.map(periksaKolom);
  const sah = hasil.every((ok) => ok);
  tombolKirim.disabled = !sah;

  if (!sah) {
    const salah = aturan.find(({ kolom }) => kolom.getAttribute("aria-invalid") === "true");
    salah.kolom.focus(); // pindah ke kolom yang perlu diperbaiki
    return;
  }

  console.log("Game baru:", inputJudul.value.trim(), inputTanggal.value, Number(inputRating.value));
  formTambah.reset();
});
