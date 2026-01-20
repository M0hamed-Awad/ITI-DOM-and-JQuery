$(document).ready(function () {
  let windowWidth = $(window).width();
  let imgWidth = $("#myImg").outerWidth();
  let stopPoint = windowWidth - (imgWidth + 50);
  $("#myImg").animate(
    { left: stopPoint + "px" },
    {
      duration: 3000,
      easing: "linear",
      step: function (currentValue) {
        $("#posValue").text(
          '<img src="car.gif" style="left: ' + parseInt(currentValue) + 'px">',
        );
      },
    },
  );
});
