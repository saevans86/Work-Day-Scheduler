// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  $(".saveBtn").on("click", function(){
    const time = $(this).attr("id");
    const textAreaValue = $(this).siblings("textarea").val();
    localStorage.setItem(time, textAreaValue);
  })

  for (let i = 9; i <= 11; i++) {
    $(`#${i}`).siblings("textarea").val(localStorage.getItem(i))
  }

  const clockDisplay = dayjs().format("hh:mm:ss: a")
  $("#currentTime").text(clockDisplay);  
  const d =new Date();
  const hour = d.getHours();
  // const minute = d.getMinutes();
  var timeNow = ($.now());
  var timeRows = $(this).attr(".hour");
  if ($(timeRows === timeNow).css(".row") === "ff6961") {
    ('row').changeClass("red")
  } else {
    ($(timeRows > timeNow ).css(".row") === "77dd77") 
  }

 
  


  

//  $("#9").siblings("textarea").val(localStorage.getItem("9"))
//  $("#10").siblings("textarea").val(localStorage.getItem("10"))
//  $("#11").siblings("textarea").val(localStorage.getItem("11"))
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
