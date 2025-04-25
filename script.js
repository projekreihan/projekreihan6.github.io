document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('#galeri-foto .thumbnail img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeButton = document.querySelector('.close-button');

    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'flex';
            lightboxImage.src = this.dataset.src;
        });
    });

    closeButton.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(event) {
        // Jika area di luar gambar di-klik, tutup lightbox
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
