import { daftarProyek } from "./data.js";

const formTambah = document.querySelector("#tambah-game form");

export const elemen = {
  wadah: document.querySelector("#daftar"),
  pesanKosong: document.querySelector("#pesan-kosong"),
  tombolFilter: document.querySelector("#filter"),
  daftarTombolFilter: document.querySelectorAll("#filter button"),
  tombolAturUlang: document.querySelector("#atur-ulang"),
  formTambah,
  inputJudul: document.querySelector("#judul-game"),
  inputTanggal: document.querySelector("#tanggal-selesai"),
  inputRating: document.querySelector("#rating"),
  tombolKirim: formTambah.querySelector('button[type="submit"]'),
};

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  return li;
}

export function saring(state) {
  return daftarProyek.filter(
    (proyek) =>
      state.kategoriAktif === "semua" ||
      proyek.kategori === state.kategoriAktif,
  );
}

export function render(state) {
  elemen.wadah.textContent = "";

  const proyekTersaring = saring(state);
  if (proyekTersaring.length === 0) {
    elemen.pesanKosong.hidden = false;
  } else {
    elemen.pesanKosong.hidden = true;
    proyekTersaring.forEach((proyek) =>
      elemen.wadah.append(buatKartu(proyek)),
    );
  }

  elemen.daftarTombolFilter.forEach((tombol) => {
    tombol.classList.toggle(
      "aktif",
      tombol.dataset.kategori === state.kategoriAktif,
    );
  });
}
