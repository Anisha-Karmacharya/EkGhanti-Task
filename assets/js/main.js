
// $(function () {
//   $("#nav-bar").load("../../component/sideNav.html");
// });
$(function () {
  $("#header__right").load("../../component/topNav.html");
});
$(document).ready(function () {
  $("#content").css("display", "none");

  $("#content").fadeIn(2000);

  $("a.transition").click(function (event) {
    event.preventDefault();
    linkLocation = this.href;
    $("#content").fadeOut(1000, redirectPage);
  });

  function redirectPage() {
    window.location = linkLocation;
  }
});
