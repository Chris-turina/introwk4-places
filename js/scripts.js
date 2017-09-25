//business logic
function Place(name, date) {
  this.placeName = name;
  this.placeDate = date;
}
//user interface logic
$(document).ready(function() {
  $("form#places-form").submit(function(event) {
    event.preventDefault();

    var inputtedPlaceName = $("input#place-name").val();
    var inputtedPlaceDate = $("input#place-date").val();

    var newPlace = new Place(inputtedPlaceName, inputtedPlaceDate);

    $("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.placeName);
      $(".place-date").text(newPlace.placeDate);
    });

    $("input#place-name").val("");
    $("input#place-date").val("");
  })
});
