import { aturUlang, pilihKategori, resetKategori } from "./state.js";
import { elemen } from "./dom.js";

export function pasangPendengar(state) {
  elemen.tombolFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol || !tombol.dataset.kategori) return;
    pilihKategori(state, tombol.dataset.kategori);
  });

  elemen.tombolAturUlang.addEventListener("click", () => {
    aturUlang();
    resetKategori(state);
  });

  const aturan = [
    { kolom: elemen.inputJudul, cek: (nilai) => nilai.trim().length >= 2 },
    { kolom: elemen.inputTanggal, cek: (nilai) => nilai !== "" },
    {
      kolom: elemen.inputRating,
      cek: (nilai) =>
        nilai.trim() !== "" && Number(nilai) >= 1 && Number(nilai) <= 10,
    },
  ];

  function periksaKolom({ kolom, cek }) {
    const sah = cek(kolom.value);
    if (sah) {
      kolom.removeAttribute("aria-invalid");
    } else {
      kolom.setAttribute("aria-invalid", "true");
    }
    return sah;
  }

  function semuaLayak() {
    return aturan.every(({ kolom, cek }) => cek(kolom.value));
  }

  aturan.forEach((item) => {
    item.kolom.addEventListener("input", () => {
      periksaKolom(item);
      elemen.tombolKirim.disabled = !semuaLayak();
    });
  });

  elemen.formTambah.addEventListener("submit", (event) => {
    event.preventDefault();
    const hasil = aturan.map(periksaKolom);
    const sah = hasil.every((ok) => ok);
    elemen.tombolKirim.disabled = !sah;

    if (!sah) {
      const salah = aturan.find(
        ({ kolom }) => kolom.getAttribute("aria-invalid") === "true",
      );
      salah.kolom.focus();
      return;
    }

    console.log(
      "Game baru:",
      elemen.inputJudul.value.trim(),
      elemen.inputTanggal.value,
      Number(elemen.inputRating.value),
    );
    elemen.formTambah.reset();
  });
}
