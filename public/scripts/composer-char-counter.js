$(document).ready(function() {
  // --- our code goes here ---
  $('textarea').on("input", (function() {
    const currentLenght = $(this).val().length;
    const charCounter = 140 - currentLenght;
    const limit = $('.counter').html(charCounter);

    if (charCounter < 0) {
      limit.css({"color" : "red"});
    } else {
      limit.css({"color" : "#545149"});
    }
  }));
});