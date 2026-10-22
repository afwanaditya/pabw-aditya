<script setup>
import { computed } from 'vue'
import { state } from '../state.js'

const proyekTersaring = computed(() =>
  state.daftarProyek.filter(
    (proyek) =>
      state.kategoriAktif === 'semua' ||
      proyek.kategori === state.kategoriAktif,
  ),
)
</script>

<template>
  <ul id="daftar">
    <li
      v-for="proyek in proyekTersaring"
      :key="proyek.id"
      class="kartu"
    >
      {{ proyek.judul }}
    </li>
  </ul>
  <p id="pesan-kosong" :hidden="proyekTersaring.length !== 0">
    Tidak ada proyek pada kategori itu.
  </p>
</template>
