# schedule-planner

A calender application that allows users to save events for each hour of the day. The current day is displayed a top the screen, as the time blocks are colored coded based on the time of day (past,present, or future).

## Getting Started

Cloning respository to local directory

1. Open terminal (Mac) or Git Bash (PC).
2. Navigate to prefered directory.
3. Run: **_git clone url_**.
4. Use finder(MAC) or file explorer(PC), and navigate to folder containing downloaded repository.
5. Open folder in code editor of choice.

##Built With

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

##Deplyed link

- [Live site link](https://jbrown827.github.io/schedule-planner/)

##Code Snipets
![alt text]()

```

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



/*---- Function Calls ----*/
currentDate();
colorChange();

```

#Authors

- **Jaja Brown**
  - [Link to Portfolio]()
  - [Link to Github](https://github.com/jbrown827)
  - [Link to LinkedIn](https://www.linkedin.com/in/jaja-brown-a42261201/)

##Acknowledgments
