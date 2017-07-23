var displayPlayerSelection = function() {
  $("#game-board").hide();
}();

function validate() {
  var user = document.getElementById('stark').checked;

  if (user === true) {
      $("#player-selection").hide();
      $("#game-board").show();
  } else {
    alert("please select one");
    return false;
  }
}
