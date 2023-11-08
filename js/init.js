(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');

  let slideIndex = 0;

  function showSlide(index) {
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  showSlide(slideIndex);
  setInterval(nextSlide, 3000); // Altera o slide a cada 3 segundos
});
