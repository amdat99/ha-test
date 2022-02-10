// TODO - I haven't quite tested this properly
$(document).ready(function () {
  let hidden = true;
  $("#show-hidden-section").click(function (event) {
    event.preventDefault();
    if (hidden) {
      $("#show-hidden-section").text("Show less");
      hidden = false;
    } else {
      $("#show-hidden-section").text("Show more");
      hidden = true;
    }
    $("#hidden-section").slideToggle();
  });
});
