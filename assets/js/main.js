
  
//   swiper banner
  document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiperBanner", {
      loop: true, 
      slidesPerView: 1, 
      spaceBetween: 0, 
      autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true, 
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

  // Swiper eServices
  

  document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiperServices", {
      loop: true, 
      slidesPerView: 4, 
      spaceBetween: 35, 
      autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
      },
      breakpoints: {
        1920: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        1028: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        993: { slidesPerView: 3 }
    },
      pagination: {
        el: ".swiper-pagination",
        clickable: true, 
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

  new WOW().init();

  new WOW({
    callback: function(el) {
        if (el.classList.contains('wow')) {
            setTimeout(() => {
                el.querySelector('.spinner-container').style.opacity = "0"; // Hide spinner after 0.89s
            }, 890);
        }
    }
}).init();
