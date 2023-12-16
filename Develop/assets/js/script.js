// Use const until you can't, and then use let 
$(document).ready(function() {

function displayDate() {
  const currentDate = dayjs().format('dddd, MMMM D, YYYY');
  $("#currentDate").text(currentDate);
}

const showTime = document.querySelector("#currentDate"); // displays current date/time in 24hr time
const currentTime = dayjs().format("dddd, MMMM D, YYYY, HH:mm:ss");
showTime.textContent = currentTime;

setInterval(function() {
  displayTime();
} ,1000);

// save button
  $(".saveBtn").on("click", function(){ // event listener, returns row id
    // not a let, uses execution of different function via click event -- when this function runs it refers to its own particular instant
    const text = $(this).siblings(".description").val(); 
    const time = $(this).parent().attr("id");
    localStorage.setItem(time, text); // saves row id to local storage
  });

function trackHours(){ // pulls number of hours, updates class
  const currentHour = dayjs().hour();

    $(".time-block").each(function() {
      const parentId = $(this).attr("id") // pulls time-block id 
      const hourBlock = parseInt(parentId.split("-")[1]); // split id at the hyphen, pulls second value of the array (the hour)
      const savedText = localStorage.getItem(parentId); // pulls value stored from saveBtn event listener function
        $(this).children(".description").val(savedText); // sets value of child element to stored value 

        console.log(hourBlock, currentHour)

      if (hourBlock < currentHour) { // compare id hour to current hour
        $(this).addClass("past"); // if less than value of currentHour -> 'past'
        console.log("past")
      } else if (hourBlock === currentHour) { // if equal to currentHour --> add 'present' or 'future'
        $(this).addClass("present");
      //  console.log("present")
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
