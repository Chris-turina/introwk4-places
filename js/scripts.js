//business logic
function Place(name, date, landmark) {
  this.placeName = name;
  this.placeDate = date;
  this.placeLandmark = landmark;
}
//user interface logic
$(document).ready(function() {
  $("form#places-form").submit(function(event) {
    event.preventDefault();

    var inputtedPlaceName = $("input#place-name").val();
    var inputtedPlaceDate = $("input#place-date").val();
    var inputtedPlaceLandmark = $("input#place-landmark").val();

    var newPlace = new Place(inputtedPlaceName, inputtedPlaceDate, inputtedPlaceLandmark);

    $("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.placeName);
      $(".place-name").text(newPlace.placeName);
      $(".place-date").text(newPlace.placeDate);
      $(".place-landmark").text(newPlace.placeLandmark);
    });

    $("input#place-name").val("");
    $("input#place-date").val("");
    $("input#place-landmark").val("");
  })
});
