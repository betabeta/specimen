$(document).ready(function(){

  $(".weights-gallery").click(function() {
    $(".weights-gallery").toggleClass("expanded");
  });

  $("#style-switch").click(function() {
    if ($(".weights-gallery").hasClass("expanded")) {
      $('.weights-gallery .weight').each(function(i) {
        (function(self, j) {
          setTimeout(function() {
            $(self).toggleClass('italic');
          },(j*80)+80);
        })(this, i);
      });
    } else {
      $(".weights-gallery .weight").toggleClass('italic')
    }

  $(this).toggleClass("italic");

  if ($(this).hasClass("italic")) {
    $(this).html("i");
  } else {
    $(this).html("r");
  }

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

  $(".select-style").change(function() {
    var value = $(this).val().split("-");
    var weight = value[0];
    var style = value[1];
    $(this).parents(".editable-row").find("input").css({"font-style": style, "font-weight": weight});
  }).change();

  $(".select-size").change(function() {
    var size = $(this).val();
    $(this).parents(".editable-row").find("input").css("font-size", size);
  }).change();

});