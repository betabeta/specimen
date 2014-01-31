$(document).ready(function(){

  $(".weights-gallery").click(function() {
    $(".weights-gallery").toggleClass("expanded");
  });

  $("#style-switch").click(function() {
    $(".weights-gallery .weight").toggleClass("italic");
    return false;
  });

  $(".language").click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      var next = $(this).next();
      if (!next.length) {
        next = $(".language").first();
      }
      next.addClass("active");
      $("#current-language").html(next.attr("id"));
    }
  });

});