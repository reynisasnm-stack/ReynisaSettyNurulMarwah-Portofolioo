// --- Fungsi 1: Smooth Scroll saat Navigasi Diklik --- //
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah perilaku default

        // Mengambil target ID
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Melakukan scroll halus ke posisi section
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Memberikan offset agar tidak tertutup navbar
                behavior: 'smooth'
            });
        }
    });
});

// --- Fungsi 2: Highlighting Menu saat Di-scroll --- //
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Mendeteksi section mana yang sedang dilihat
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    // Menghapus kelas 'active' dari semua menu dan menambahkannya ke yang aktif
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Pesan sambutan di console (opsional)
console.log("Portofolio Reynisa Setty Nurul Marwah berhasil dimuat!");