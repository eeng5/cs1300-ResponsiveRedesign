var slideIndex = 1;
showSlides(1, slideIndex);
showSlides(2, slideIndex);

// Next/previous controls
function plusSlides(num, n) {
    showSlides(num, slideIndex += n);
}

// Thumbnail image controls
function currentSlide(num, n) {
    showSlides(num, slideIndex = n);
}

function showSlides(num, n) {
    var i;
    var slides;
    var dots;
    if (num == 1) {
        slides = document.getElementsByClassName("mySlides");
        dots = document.getElementsByClassName("dot");
    } else {
        slides = document.getElementsByClassName("mySlides2");
        dots = document.getElementsByClassName("dot2");
    }
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}