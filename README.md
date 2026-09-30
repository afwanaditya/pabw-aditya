# PABW — Afwan Aditya Saputra — 25523105

## Pertemuan 3 — Halaman profil saya

Topik halaman saya: game yang pernah saya mainkan.

- Judul halaman: Game yang Pernah Saya Mainkan
- Deskripsi: catatan game yang sudah saya mainkan beserta penilaian pribadi saya
- Tautan navigasi: Daftar Game, Tambah Game, Kontak
- Dua bagian utama: Daftar Game, Tambah Game
- Kolom tabel: judul game, genre, platform, rating saya
- Kolom form: judul game, tanggal selesai, rating
- Gambar: game-favorit.webp

## Pertemuan 4 — Design token halaman profil

- Berkas gaya yang dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #6D28D9 (ungu), dipilih karena saya suka ungu dan cocok untuk tema game

### Token yang saya tetapkan

| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #6D28D9 | tombol, tautan, judul, garis fokus |
| --color-fg | #0F172A | warna teks utama |
| --color-bg | #FAF7FF | latar halaman, putih agak keunguan |
| --radius-md | 0.75rem | sudut tombol, kartu, dan kolom isian |
| --space-4 | 1rem | jarak standar antar elemen |

Kriteria selesai saya: mengubah --violet-700 di satu baris harus mengubah warna
tombol, tautan, judul, dan garis fokus.

## Pertemuan 5 — Layout pakai grid dan flexbox

Masih halaman yang sama kayak Pertemuan 4, cuma disalin ke folder worksheet-p5/.
Warna sama isinya nggak diubah, yang diganti cuma cara nyusun posisinya
(layout.css sama komponen.css, plus sedikit HTML).

### Sketsa kerangka

```
+----------------------------------------------+
| header (navbar)                       auto   |
+-----------+----------------------------------+
| sisi      | utama (tabel, kartu, gambar)     |
| 16rem     | 1fr                              |
|           +----------------------------------+
|           | bawah (form tambah game)         |
+-----------+----------------------------------+
| footer                                auto   |
+----------------------------------------------+
```

Yang saya pakai:
- Halaman dibagi 3 baris pakai grid: header, isi, footer
- Bagian isi dibagi 2 kolom: sidebar "Tentang Saya" di kiri, konten di kanan
- Navbar, isi kartu, sama menu samping pakai flex
- Kartu game pakai grid auto-fit, jadi jumlah kolomnya ganti sendiri pas layar dikecilin
- Kartu Minecraft saya bikin lebih lebar (span 2) soalnya game favorit
- Di hp sidebar-nya pindah ke atas biar nggak kepotong

## Catatan penggunaan AI

saya menggunakan AI untuk brainstorming ide topik tapi profil.html dll saya kerjakan sendiri.
CSS Pertemuan 4 dibuat AI karena mepet deadline; uji kontras, Lighthouse, dan
uji satu baris saya kerjakan sendiri.
saya menggukan AI di pertemuan 5 ini sedikit lebih banyak.
