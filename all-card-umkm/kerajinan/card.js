async function umkmAtapDaun() {
  try {
    const response = await fetch('../../data-umkm/atap-rumbia.json')
    if (!response.ok) throw new Error(`Gagal mengambil data: ${response.statusText}`)
    
    const result = await response.json()
    if (!Array.isArray(result)) throw new Error('Data JSON bukan array')

    const containerUmkm = document.querySelector('.all-umkm')
    if (!containerUmkm) throw new Error('Elemen .all-umkm tidak ditemukan')

    containerUmkm.innerHTML = ''
    result.forEach((umkm) => {
      const element = document.createElement('section')
      element.className = 'card-umkm h-screen bg-bottom'
      element.style.backgroundImage = `url('${umkm.background.replace(/[<>]/g, '')}')`
      element.style.backgroundSize = 'cover'
      element.innerHTML = `
        <section class="descp">
          <h2 class="capitalize">${umkm.title}</h2>
          <section class="location">
            <img src="../../assets/icons/map-pin.svg" alt="Lokasi">
            <p class="alamat">${umkm.alamat}</p>
          </section>
          <a href="${umkm.link}">
            <section class="button">show</section>
          </a>
        </section>`
      containerUmkm.appendChild(element)
    })


  } catch (error) {
    console.error('Error:', error)
    const containerUmkm = document.querySelector('.all-umkm')
    if (containerUmkm) {
      containerUmkm.innerHTML = '<p>Terjadi kesalahan saat memuat data UMKM.</p>'
    }
  }
}

document.addEventListener('DOMContentLoaded', umkmAtapDaun)