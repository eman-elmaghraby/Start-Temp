
  
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
    on: {
      slideChangeTransitionStart: function () {
        gsap.fromTo(
          ".swiperBanner .swiper-slide-active",
          { rotationY: -110, opacity: 0 },
          { rotationY: 0, opacity: 1, duration: 2.3, ease: "power2.out" }
        );
      }
    }
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
  


// Swiper News
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiperNews", {
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
      el: ".swiper-pagination2",
      clickable: true, 
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});


  new WOW().init();

// loading spinner
$(window).on('load', function(){
  $('.loading').delay(500).slideUp('slow');
})


// banner's height
function updateBannerHeight() {
  const navbar = document.querySelector('.navbar');
  const banner = document.querySelector('.swiperBanner');
  if (navbar && banner) {
      const navbarHeight = navbar.offsetHeight;
      banner.style.height = `calc(100vh - ${navbarHeight}px)`;
  }
}

// Run on load and window resize
window.addEventListener('load', updateBannerHeight);
window.addEventListener('resize', updateBannerHeight);

// scroll up
document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (window.innerHeight >= 700) {  // Ensure page is tall enough
      if (scrollTop < lastScrollTop && scrollTop > 50) {
        // Scroll up
        navbar.classList.add("position-fixed");
        navbar.classList.add("top-0");
      } else {
        // Scroll down
        navbar.classList.remove("position-fixed");
      }
    }
    lastScrollTop = scrollTop;
  });
});


