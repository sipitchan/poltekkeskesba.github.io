let currentIndex = 0;  // Indeks saat ini untuk item yang sedang terlihat
const itemsPerPage = 3; // Menampilkan 3 item per slide
const items = document.querySelectorAll("#carouselItems .carousel-item-content");
const totalItems = items.length;

// Fungsi untuk menyesuaikan jarak geser berdasarkan ukuran layar
const getMoveDistance = () => {
    const viewportWidth = window.innerWidth; // Lebar layar

    // Menentukan jarak geser berdasarkan ukuran layar
    if (viewportWidth <= 768) { // Layar tablet
        let moveDistance = 240; // Default untuk pergerakan setelah yang ke-3
        if (firstMove) {
            moveDistance = 250; // Geser 290px pertama kali
        } else if (secondMove) {
            moveDistance = 242; // Geser 283px untuk pergerakan kedua
        }
        return moveDistance; // Geser default di desktop
    } else { // Layar desktop
        let moveDistance = 277; // Default untuk pergerakan setelah yang ke-3
        if (firstMove) {
            moveDistance = 290; // Geser 290px pertama kali
        } else if (secondMove) {
            moveDistance = 283; // Geser 283px untuk pergerakan kedua
        }
        return moveDistance; // Geser default di desktop
    }
}

// Fungsi untuk menyesuaikan transformasi posisi carousel
const updateCarousel = () => {
    const moveDistance = getMoveDistance(); // Menyesuaikan pergeseran berdasarkan ukuran layar
    const translateXValue = currentIndex * moveDistance;
    document.querySelector("#carouselItems").style.transform = `translateX(-${translateXValue}px)`;

    // Mengatur status pergerakan pertama dan kedua
    if (firstMove) firstMove = false;
    else if (secondMove) secondMove = false;
};

// Variabel untuk melacak apakah pergerakan pertama dan kedua telah terjadi
let firstMove = true; // Geseran pertama
let secondMove = false; // Geseran kedua

// Fungsi untuk pindah ke item berikutnya (Next)
const nextSlide = () => {
    currentIndex++;
    if (currentIndex + itemsPerPage > totalItems) {
        currentIndex = 0; // Jika mencapai akhir, kembali ke awal
    }
    if (firstMove) {
        secondMove = true; // Menandai pergerakan kedua setelah pertama
    }
    updateCarousel();
};

// Fungsi untuk pindah ke item sebelumnya (Previous)
const prevSlide = () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalItems - itemsPerPage; // Jika sudah di awal, kembali ke akhir
    }
    if (firstMove) {
        secondMove = true; // Menandai pergerakan kedua setelah pertama
    }
    updateCarousel();
};

// Event listeners untuk tombol prev dan next
document.getElementById("nextButton").addEventListener("click", nextSlide);
document.getElementById("prevButton").addEventListener("click", prevSlide);

// Event listener untuk resize window agar jarak geser disesuaikan saat ukuran layar berubah
window.addEventListener("resize", updateCarousel);



// untuk testimonial
$(document).ready(function () {
    var silder = $(".owl-carousel");
    silder.owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: false,
        items: 1,
        stagePadding: 20,
        center: true,
        nav: false,
        margin: 50,
        dots: true,
        loop: true,
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            575: { items: 2 },
            768: { items: 2 },
            991: { items: 3 },
            1200: { items: 4 }
        }
    });
    
});




