
$(document).ready(function() {
  $('#button').click(function() {
    $('#songs').slideToggle();
  });

  function hideAll() {
    $('#grenade').hide();
    $('#count').hide();
    $('#marry').hide();
    $('#justtheway').hide();
  }

  hideAll();
  $('#songs').slideToggle();
  $('.album').click(function() {

  hideAll();

  $("audio").each(function() {
      this.pause();
      this.currentTime = 0;
  });

    switch ($(this).attr("id")) {
      case "gre":
        $('#grenade').show();
        break;
      case "doo":
        $('#count').show();
        break;
      case "earthy":
        $('#marry').show();
        break;
      case "jukebox":
        $('#justtheway').show();
        break;

    }
  });
});
