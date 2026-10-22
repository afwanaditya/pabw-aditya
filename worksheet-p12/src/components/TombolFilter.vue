<script setup>
import { state, pilihKategori } from '../state.js'

const kategori = [
  { nilai: 'semua', teks: 'Semua' },
  { nilai: 'web', teks: 'Web' },
  { nilai: 'data', teks: 'Data' },
  { nilai: 'desktop', teks: 'Desktop' },
  { nilai: 'mobile', teks: 'Mobile' },
]
</script>

<template>
  <div id="filter">
    <button
      v-for="item in kategori"
      :key="item.nilai"
      :data-kategori="item.nilai"
      :class="{ aktif: state.kategoriAktif === item.nilai }"
      @click="pilihKategori(item.nilai)"
    >
      {{ item.teks }}
    </button>
  </div>
</template>
