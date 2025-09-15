  <script>
    // Initialize Swiper for icons
    const iconSwiper = new Swiper(".iconSwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true, // infinite loop
      autoplay: {
        delay: 0,       // continuous scroll
        disableOnInteraction: false,
      },
      speed: 2000,       // scroll speed
      allowTouchMove: false, // no dragging, pure marquee effect
      breakpoints: {
        0: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
      }
    });
  </script>