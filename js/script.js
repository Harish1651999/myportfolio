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

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Devolper", "YouTuber", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
