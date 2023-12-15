// Use const until you can't, and then use let 
$(document).ready(function() {

function displayDate() {
  const currentDate = dayjas().format('dddd, MMMM D, YYYY');
  $("#currentDate").text(currentDate);
}

const showTime = document.querySelector("#currentDate"); // displays current date/time in 24hr time
const currentTime = dayjs().format("dddd, MMMM D, YYYY, HH:mm:ss");
showTime.textContent = currentTime;

setInterval(function() {
  displayTime();
} ,1000);

// save button
  $(".saveBtn").on("click", function(){ // add event listener, returns row id
    // not a let, uses execution of different function via click event -- when this function runs it refers to its own particular instant
    const text = $(this).siblings(".description").val(); 
    const time = $(this).parent().attr("id");
    localStorage.setItem(time, text); // saves row id to local storage
  });

function trackHours(){ // pulls number of hours, updates class
  const currentHour = dayjs().hour();

    $(".time-block").each(function() {
      const parentId = $(this).attr("id")
      const hourBlock = parseInt(parentId.split("-")[1]);
      const savedText = localStorage.getItem(parentId);
        $(this).children(".description").val(savedText);

        console.log(hourBlock, currentHour)

      if (hourBlock < currentHour) { // compare id hour to current hour
        $(this).addClass("past");
        console.log("past")
      } else if (hourBlock === currentHour) {
        $(this).addClass("present");
        console.log("present")
      } else {
        $(this).addClass("future");
      }  
  });
}
trackHours();

function displayTime() {
  const currentTime = dayjs().format("dddd, MMMM D, YYYY, HH:mm:ss");
  showTime.textContent = currentTime;
}
})

// $(function () {});
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. <-- DONE
  
  // HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  
  // HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
