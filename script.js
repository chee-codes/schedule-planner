/*---- Variable Declaration ----*/
var timeNow = moment();
var currentHour = timeNow.hour();

//
/*---- Function Declarations ----*/
//

//Function to display current date to page
function currentDate() {
  var liveDate = timeNow.format("dddd, MMMM Do");
  $("#show-date").text(liveDate);
}

//Function to get localStorage
function fromStorage() {
  var todo = localStorage.getItem("todo");
  if (todo === null) {
    return;
  }
  $(".input-9").text(todo);
}

//Function to set localStorage
function toStorage() {
  var todo = $(".form-control").val();
  localStorage.setItem("todo", todo);
  fromStorage();
}

//

//logging the current time
console.log(timeNow.format("[The current time is =>] HH:mm"));

//

//Function to dynamically change the color of input
//base on time of day
function colorChange() {
  var hours = $(".form-control");
  //Loop through all elements with with the class selector of ".form-control"
  for (var i = 0; i < hours.length; i++) {
    //declare and set a variable to the return value of the loop using the attribute of "data-index"
    var time = hours[i].getAttribute("data-time");

    // Conditional to compare schedule time vs current time
    if (time < currentHour) {
      hours[i].style.backgroundColor = "grey";
    } else if (time == currentHour) {
      hours[i].style.backgroundColor = "red";
    } else if (time > currentHour) {
      hours[i].style.backgroundColor = "green";
    }
  }
}

/*---- Click Events ----*/
$(".button").click((event) => {
  event.preventDefault();
  toStorage();
});

/*---- Function Calls ----*/
currentDate();
colorChange();
