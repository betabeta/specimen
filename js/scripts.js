$(document).ready(function(){

  $(".main").onepage_scroll({
     sectionContainer: ".screen",     // sectionContainer accepts any kind of selector in case you don't want to use section
     easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", 
                                      // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
     animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
     pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
     updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
     beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
     afterMove: function(index) {     // This option accepts a callback function. The function will be called after the page moves.
      if (index === 8) {
        $("#screen-6 textarea").focus();
      }
     },   
     loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
     keyboard: true,                  // You can activate the keyboard controls
     responsiveFallback: false        // You can fallback to normal page scroll by defining the width of the browser in which
                                      // you want the responsive fallback to be triggered. For example, set this to 600 and whenever 
                                      // the browser's width is less than 600, the fallback will kick in.
  });

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


  function setTime() {
    var date = new Date;
    var d = date.getDate();
    var h = date.getHours();
    if (h < 10) { h = "0"+h; }
    var m = date.getMinutes();
    if (m < 10) { m = "0"+m; }
    var s = date.getSeconds();
    if (s < 10) { s = "0"+s; }
    var result = h+':'+m+':'+s;
    $("#clock").html(result);
  }  
  
  setInterval(setTime, 1000);
  
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
    $(this).parents(".screen").find(".editable").css({"font-style": style, "font-weight": weight});
  }).change();

  $(".select-size").change(function() {
    var size = $(this).val();
    $(this).parents(".screen").find(".editable").css("font-size", size);
  }).change();

});