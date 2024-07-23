<<<<<<< HEAD
window.onload = function() {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  // Assign onclick events to the buttons
  document.querySelector('.prev').onclick = function() {
    plusSlides(-1);
  };
  document.querySelector('.next').onclick = function() {
    plusSlides(1);
  };
  
  // Assign onclick events to dots
  let dots = document.getElementsByClassName("dot");
  for (let j = 0; j < dots.length; j++) {
    dots[j].onclick = function() {
      currentSlide(j + 1);
    };
  }
};
=======
window.onload = function() {
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  // Assign onclick events to the buttons
  document.querySelector('.prev').onclick = function() {
    plusSlides(-1);
  };
  document.querySelector('.next').onclick = function() {
    plusSlides(1);
  };
  
  // Assign onclick events to dots
  let dots = document.getElementsByClassName("dot");
  for (let j = 0; j < dots.length; j++) {
    dots[j].onclick = function() {
      currentSlide(j + 1);
    };
  }
};
>>>>>>> fcca7c6e2bb87ee19561405ce8f64669b619caeb
