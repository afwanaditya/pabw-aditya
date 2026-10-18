# Worksheet P11

## Pertemuan 11

Di pertemuan ini, kode JavaScript dari P9 dipisah jadi lima modul:

| Berkas | Tanggung jawab | Kode yang dipindahkan |
| --- | --- | --- |
| `js/data.js` | Menyimpan data profil dan proyek, serta fungsi pemformat yang tidak mengubah halaman. | Data `profil`, `daftarProyek`, `buatPerkenalan`, dan `formatKeahlian` dari `js/app.js`. |
| `js/state.js` | Menyimpan state kategori, memuat dan menyimpan pilihan kategori, serta mengatur ulang pilihan. | Pilihan kategori yang sebelumnya ditandai lewat tombol filter di `js/dom.js`, ditambah penyimpanan localStorage. |
| `js/events.js` | Memasang pendengar untuk filter, atur ulang, dan form tambah game. | Pendengar filter dan validasi form dari `js/dom.js`. |
| `js/dom.js` | Memilih elemen, menyaring proyek berdasarkan state, merender daftar, dan mengatur kelas tombol aktif. | Pemilih elemen, filter, render, dan perubahan kelas tombol dari `js/dom.js`. |
| `js/app.js` | Menghubungkan modul dengan memuat state, merender, dan memasang pendengar. | Menjadi titik awal aplikasi; demonstrasi `console.log` dan pembacaan DOM dari `js/app.js` P9 tidak dipakai lagi. |

Yang disimpan di browser hanya pilihan kategori aktif, dengan kunci `pabw-p11` dan versi 2. Isi form dan pilihan tema tidak disimpan. Token, kata sandi, dan data pribadi juga sengaja tidak disimpan.

Kode pada worksheet ini dibantu AI. Bagian yang saya kerjakan sendiri adalah pengujian, tangkapan layar, mengisi worksheet, memasang Node.js, dan Git. Versi Node.js: (diisi setelah Node.js terpasang).
