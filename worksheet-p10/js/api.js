const ALAMAT = 'https://www.freetogame.com/api/games';

export async function ambilGame() {
  try {
    const respons = await fetch(ALAMAT);
    console.log('Status:', respons.status, 'OK:', respons.ok);
    if (!respons.ok) {
      throw new Error('status ' + respons.status);
    }
    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error('Gagal mengambil data:', galat);
    throw galat;
  }
}
