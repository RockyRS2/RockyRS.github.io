$(document).ready(function() {
    $(window).scroll(function() {
      var aboutMeDiv = $("#aboutMe");
      var imageDiv = $("#imageDiv");

      var aboutMeDivPosition = aboutMeDiv.offset().top;
      var imageDivPosition = imageDiv.offset().top;

      var windowHeight = $(window).height();
      var scrollPosition = $(window).scrollTop();

      if (aboutMeDivPosition < scrollPosition + windowHeight) {
        aboutMeDiv.addClass("visible");
      }
      if (imageDivPosition < scrollPosition + windowHeight) {
        imageDiv.addClass("visible");
      }
    });
  });


  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
  
    $(".card").each(function() {
      var elementOffset = $(this).offset().top;
  
      if (elementOffset < scrollTop + windowHeight) {
        $(this).addClass("slide-in");
      }
    });
  });


  $(document).ready(function(){
    $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2500
    });
});
  