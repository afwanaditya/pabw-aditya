<script setup>
import { onMounted, watch } from 'vue'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
import { state } from './state.js'
import { aturUlang, muat, simpan } from './simpanan.js'

const identitas = {
  judul: 'Game yang Pernah Saya Mainkan',
  deskripsi: 'Catatan game yang sudah saya mainkan beserta penilaian pribadi saya.',
}

onMounted(() => {
  const dataTersimpan = muat()
  state.kategoriAktif = dataTersimpan?.kategoriAktif ?? 'semua'
})

watch(
  state,
  (stateBaru) => {
    simpan(stateBaru)
  },
  { deep: true },
)

function aturUlangKategori() {
  aturUlang()
  state.kategoriAktif = 'semua'
  simpan(state)
}
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="identitas" />

    <main class="isi">
      <aside class="sisi" aria-label="Tentang saya">
        <h2>Tentang Saya</h2>
        <p>Saya suka main game santai dan game bangun-bangunan.</p>
        <ul class="menu-samping">
          <li>Jumlah game: 3</li>
          <li>Genre favorit: Sandbox</li>
          <li>Platform: PC dan ponsel</li>
        </ul>
      </aside>

      <section id="daftar-game" class="utama">
        <h2>Daftar Game</h2>

        <div class="table-wrap">
          <table>
            <caption>Game yang pernah saya mainkan dan rating saya (skala 1–10)</caption>
            <thead>
              <tr>
                <th scope="col">Judul game</th>
                <th scope="col">Genre</th>
                <th scope="col">Platform</th>
                <th scope="col">Rating saya</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Minecraft</th>
                <td>Sandbox</td>
                <td>PC</td>
                <td>9</td>
              </tr>
              <tr>
                <th scope="row">Stardew Valley</th>
                <td>Simulasi bertani</td>
                <td>PC</td>
                <td>8</td>
              </tr>
              <tr>
                <th scope="row">Mobile Legends</th>
                <td>MOBA</td>
                <td>Ponsel</td>
                <td>7</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Kartu game</h3>
        <div class="galeri">
          <div class="kartu sorotan">
            <div class="kartu__isi">
              <p class="kartu__judul">Minecraft</p>
              <p>Sandbox, PC. Game paling lama saya mainkan, biasanya bangun rumah sama teman.</p>
            </div>
            <div class="kartu__kaki">
              <span>Rating: 9/10</span>
              <span class="lencana">Favorit</span>
            </div>
          </div>
          <div class="kartu">
            <div class="kartu__isi">
              <p class="kartu__judul">Stardew Valley</p>
              <p>Simulasi bertani, PC.</p>
            </div>
            <div class="kartu__kaki">
              <span>Rating: 8/10</span>
            </div>
          </div>
          <div class="kartu">
            <div class="kartu__isi">
              <p class="kartu__judul">Mobile Legends</p>
              <p>MOBA, Ponsel.</p>
            </div>
            <div class="kartu__kaki">
              <span>Rating: 7/10</span>
            </div>
          </div>
        </div>

        <figure>
          <img src="/game-favorit.webp"
               alt="Ilustrasi stik game abu-abu dengan tombol arah hitam dan empat tombol berwarna merah, biru, hijau, dan kuning di atas latar biru tua"
               width="640" height="360" loading="lazy">
          <figcaption>Stik game, teman setia saya saat bermain.</figcaption>
        </figure>

        <section>
          <h2>Proyek</h2>
          <TombolFilter />
          <button type="button" id="atur-ulang" @click="aturUlangKategori">Atur Ulang</button>
          <DaftarProyek />
        </section>
      </section>

      <section id="tambah-game" class="bawah">
        <h2>Tambah Game</h2>
        <p>Catat game baru yang sudah selesai dimainkan.</p>
        <FormKontak />
      </section>
    </main>

    <footer id="kontak">
      <p>Afwan Aditya Saputra · 25523105 · <time datetime="2026">2026</time></p>
    </footer>
  </div>
</template>
