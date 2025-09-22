const leaf = document.querySelector('.icon .leaf');
const utensils = document.querySelector('.icon .utensils');
const shopp = document.querySelector('.icon .shopp');


document.addEventListener('DOMContentLoaded', () => {

    let leafTimeout = 1000;
    let utensilsTimeout = 8000;
    let shoppTimeout = 14000;

    function infinite() {
        setTimeout(() => {
            shopp.classList.remove('opacity-[1]', 'z-10')
            shopp.classList.add('opacity-[0]')
            leaf.classList.remove('opacity-[0]')
            leaf.classList.add('opacity-[1]', 'z-10')
        }, leafTimeout)
        setTimeout(() => {
            leaf.classList.remove('opacity-[1]', 'z-10')
            leaf.classList.add('opacity-[0]')
            utensils.classList.remove('opacity-[0]')
            utensils.classList.add('opacity-[1]', 'z-10')
        }, utensilsTimeout)
        setTimeout(() => {
            utensils.classList.remove('opacity-[1]', 'z-10')
            utensils.classList.add('opacity-[0]')
            shopp.classList.remove('opacity-[0]')
            shopp.classList.add('opacity-[1]', 'z-10')
        }, shoppTimeout)
    }

    infinite()

    setInterval(infinite, 19000)
})


// logika icon dan image
const imgLeaf = document.querySelector('.img-umkm .kerajinan img')
const imgUtens = document.querySelector('.img-umkm .makanan img')
const imgShopp = document.querySelector('.img-umkm .sembako img')


const linkLeaf = document.querySelector('.img-umkm .kerajinan a')
const linkUtens = document.querySelector('.img-umkm .makanan a')
const linkShopp = document.querySelector('.img-umkm .sembako a')

const iconAll = document.querySelector('.all-icon')

iconAll.addEventListener('click', () => {
    setTimeout(() => {
        linkLeaf.classList.remove('invisible')
        imgLeaf.classList.remove('translate-x-[-7.8rem]', 'scale-0', 'hidden')
        imgLeaf.classList.add('translate-x-[0]', 'scale-100', 'block')
    }, 100)
    setTimeout(() => {
        linkUtens.classList.remove('invisible')
        imgUtens.classList.remove('translate-x-[7.8rem]', 'scale-0')
        imgUtens.classList.add('translate-x-[0]', 'scale-100')
    }, 200)
    setTimeout(() => {
        linkShopp.classList.remove('invisible')
        imgShopp.classList.remove('translate-y-[-5.8rem]', 'scale-0')
        imgShopp.classList.add('translate-y-[0]', 'scale-100')
    }, 300)
})



