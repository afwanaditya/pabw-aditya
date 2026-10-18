import { render } from "./dom.js";

const KUNCI = "pabw-p11";
const VERSI = 2;
const KATEGORI_BAWAAN = "semua";

export function simpan(state) {
  localStorage.setItem(
    KUNCI,
    JSON.stringify({
      kategoriAktif: state.kategoriAktif,
      versi: VERSI,
    }),
  );
}

export function muat() {
  const data = localStorage.getItem(KUNCI);
  if (data === null) return null;

  let isi;
  try {
    isi = JSON.parse(data);
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }

  if (isi?.versi !== VERSI) {
    localStorage.removeItem(KUNCI);
    return null;
  }

  return isi;
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
}

export const state = {
  kategoriAktif: muat()?.kategoriAktif ?? KATEGORI_BAWAAN,
};

export function pilihKategori(state, kategori) {
  state.kategoriAktif = kategori;
  simpan(state);
  render(state);
}

export function resetKategori(state) {
  state.kategoriAktif = KATEGORI_BAWAAN;
  render(state);
}
