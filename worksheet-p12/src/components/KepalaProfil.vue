<script setup>
defineProps({
  profil: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <header>
    <input type="checkbox" id="tema" class="pengalih-tema">
    <label for="tema" class="tombol-tema">Tema gelap</label>

    <div class="navbar">
      <h1>{{ profil.judul }}</h1>
      <nav aria-label="Navigasi utama">
        <ul>
          <li><a href="#daftar-game">Daftar Game</a></li>
          <li><a href="#tambah-game">Tambah Game</a></li>
          <li><a href="#kontak">Kontak</a></li>
        </ul>
      </nav>
    </div>
    <p>{{ profil.deskripsi }}</p>
  </header>
</template>
