<script setup>
import { reactive, ref } from 'vue'

const judul = ref('')
const tanggal = ref('')
const rating = ref('')
const inputJudul = ref(null)
const inputTanggal = ref(null)
const inputRating = ref(null)
const tombolDisabled = ref(false)
const sudahDiperiksa = reactive({
  judul: false,
  tanggal: false,
  rating: false,
})

function judulLayak() {
  return judul.value.trim().length >= 2
}

function tanggalLayak() {
  return tanggal.value !== ''
}

function ratingLayak() {
  return (
    String(rating.value).trim() !== '' &&
    Number(rating.value) >= 1 &&
    Number(rating.value) <= 10
  )
}

function semuaLayak() {
  return judulLayak() && tanggalLayak() && ratingLayak()
}

function periksaKolom(nama, nilai) {
  if (nama === 'judul') {
    judul.value = nilai
  } else if (nama === 'tanggal') {
    tanggal.value = nilai
  } else {
    rating.value = nilai
  }

  sudahDiperiksa[nama] = true
  tombolDisabled.value = !semuaLayak()
}

function simpanGame() {
  sudahDiperiksa.judul = true
  sudahDiperiksa.tanggal = true
  sudahDiperiksa.rating = true

  const sah = semuaLayak()
  tombolDisabled.value = !sah

  if (!sah) {
    if (!judulLayak()) {
      inputJudul.value.focus()
    } else if (!tanggalLayak()) {
      inputTanggal.value.focus()
    } else {
      inputRating.value.focus()
    }
    return
  }

  console.log(
    'Game baru:',
    judul.value.trim(),
    tanggal.value,
    Number(rating.value),
  )

  judul.value = ''
  tanggal.value = ''
  rating.value = ''
  sudahDiperiksa.judul = false
  sudahDiperiksa.tanggal = false
  sudahDiperiksa.rating = false
}
</script>

<template>
  <form action="/simpan" method="post" novalidate @submit.prevent="simpanGame">
    <div class="form-kolom">
      <label for="judul-game">Judul game</label>
      <input
        id="judul-game"
        v-model="judul"
        type="text"
        name="judul-game"
        required
        minlength="2"
        maxlength="60"
        :aria-invalid="sudahDiperiksa.judul && !judulLayak() ? 'true' : null"
        ref="inputJudul"
        @input="periksaKolom('judul', $event.target.value)"
      >
      <small class="pesan-galat">Judul minimal 2 huruf.</small>
    </div>
    <div class="form-kolom">
      <label for="tanggal-selesai">Tanggal selesai dimainkan</label>
      <input
        id="tanggal-selesai"
        v-model="tanggal"
        type="date"
        name="tanggal-selesai"
        required
        :aria-invalid="sudahDiperiksa.tanggal && !tanggalLayak() ? 'true' : null"
        ref="inputTanggal"
        @input="periksaKolom('tanggal', $event.target.value)"
      >
      <small class="pesan-galat">Tanggal harus diisi.</small>
    </div>
    <div class="form-kolom">
      <label for="rating">Rating saya (1–10)</label>
      <input
        id="rating"
        v-model="rating"
        type="number"
        name="rating"
        required
        min="1"
        max="10"
        :aria-invalid="sudahDiperiksa.rating && !ratingLayak() ? 'true' : null"
        ref="inputRating"
        @input="periksaKolom('rating', $event.target.value)"
      >
      <small class="pesan-galat">Rating harus 1 sampai 10.</small>
    </div>
    <button type="submit" :disabled="tombolDisabled">Simpan</button>
  </form>
</template>
