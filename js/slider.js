const carousels = document.querySelectorAll('.carousel');

        carousels.forEach(carousel => {
            const images = carousel.querySelectorAll('.carousel-image');
            let currentIndex = 0;
        
            setInterval(() => {
                images[currentIndex].style.display = 'none';
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].style.display = 'block';
            }, 3000); // 3 segundos
        });