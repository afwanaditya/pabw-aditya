export const profil = {
  nama: "Afwan Aditya Saputra",
  peran: "Mahasiswa Informatika yang aktif ikut kompetisi business case",
  keahlian: ["Business Case", "Pitching", "Javascript", "Integrasi AI"],
};

export const daftarProyek = [
  { id: "grincare", judul: "GrinCare", tahun: 2026, selesai: true, kategori: "desktop" },
  { id: "respiratb", judul: "RespiraTB", tahun: 2026, selesai: true, kategori: "web" },
  { id: "finatra-nexus", judul: "FINATRA NEXUS", tahun: 2026, selesai: false, kategori: "data" },
];

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");
