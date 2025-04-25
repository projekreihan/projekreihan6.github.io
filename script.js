document.addEventListener('DOMContentLoaded', function() {
    const imageGrid = document.querySelector('.image-grid');
    const videoGrid = document.querySelector('.video-grid');

    // Daftar nama file foto (pastikan sesuai dengan nama file di folder img)
    const fotoFiles = [
        'foto1.jpg',
        'foto2.jpg',
        'foto3.jpg',
        'foto4.jpg',
        'foto5.jpg',
        'foto6.jpg',
        // Tambahkan nama file foto lainnya di sini
    ];

    // Daftar nama file video (pastikan sesuai dengan nama file di folder video)
    const videoFiles = [
        'video1.mp4',
        'video2.mp4',
        'video3.mp4',
        // Tambahkan nama file video lainnya di sini
    ];

    // Tambahkan elemen gambar ke bagian foto
    fotoFiles.forEach(file => {
        const imgElement = document.createElement('img');
        imgElement.src = `img/${file}`;
        imgElement.alt = `Kenangan Foto ${file}`;
        imageGrid.appendChild(imgElement);
    });

    // Tambahkan elemen video ke bagian video
    videoFiles.forEach(file => {
        const videoElement = document.createElement('video');
        videoElement.src = `video/${file}`;
        videoElement.controls = true; // Menampilkan kontrol video (play, pause, dll.)
        videoElement.width = '100%'; // Agar video responsif
        videoGrid.appendChild(videoElement);
    });
});
