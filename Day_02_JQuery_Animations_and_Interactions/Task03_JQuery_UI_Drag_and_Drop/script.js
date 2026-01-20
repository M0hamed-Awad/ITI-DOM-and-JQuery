$(document).ready(function () {
  $("#bugsBunny").draggable({
    start: function () {
      $(this).effect(
        "shake",
        {
          direction: "left",
          distance: 2,
          times: 2,
        },
        200,
      );
    },
    revert: "invalid",
  });

  $("#blackHole").droppable({
    accept: "#bugsBunny",
    drop: function (event, ui) {
      ui.draggable.fadeOut(1000, function () {
        $(this).css('display', 'none')
      });
    },
  });
});
