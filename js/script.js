$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });

  $(".menu-btn").click(function () {
    $(".header .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  $(".close-menu").click(function () {
    $(".header .menu").removeClass("active");
  });

  $(".menu li").click(function () {
    $(".header .menu").removeClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Devoloper", "YouTuber", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Devoloper", "YouTuber", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

$(".teams-slider").slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
});
