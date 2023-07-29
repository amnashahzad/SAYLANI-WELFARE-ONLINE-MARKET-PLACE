let slideIndex = 1;

        function showSlide(n) {
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");

            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }

        function plusSlides(n) {
            showSlide((slideIndex += n));
        }

        function currentSlide(n) {
            showSlide((slideIndex = n));
        }

        // Automatic Slideshow
        function autoSlide() {
            showSlide((slideIndex += 1));
        }

        // Set the interval for autoSlide (in milliseconds)
        setInterval(autoSlide, 2000);