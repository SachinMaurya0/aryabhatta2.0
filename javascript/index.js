const slide = document.getElementById('carousel-slide');
    const images = slide.getElementsByTagName('img');
    let index = 0;

    function moveSlide(step) {
      index += step;
      if (index < 0) index = images.length - 1;
      if (index >= images.length) index = 0;
      slide.style.transform = `translateX(-${index * 100}%)`;
    }

    // Auto slide (optional)
    setInterval(() => {
      moveSlide(1);
    }, 6000); // Change slide every 4 seconds