/*---- Variable Declaration ----*/
var timeNow = moment();
var currentHour = timeNow.hour();

//Function to display current date to page
function currentDate() {
  var liveDate = timeNow.format("dddd, MMMM Do");
  $("#show-date").text(liveDate);
}

/*---- Function Calls ----*/
currentDate();
colorChange();
