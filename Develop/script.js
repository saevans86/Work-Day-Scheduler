
$(document).ready(function()  { // ensures html renders before jquery
  $(".btn").on("click", function(){
    var time = $(this).attr("id");  
    var textAreaValue = $(this).siblings("textarea").val(); 

    
    localStorage.setItem(time, textAreaValue); 
    console.log(textAreaValue, time)
  })
  for (let i = 8; i <= 11; i++) {
    $(`#${i}`).siblings("textarea").val(localStorage.getItem(i)) 
  }

    var currentTime = new Date().getHours(); //get hours based on current time
          $('.time-block').each(function() { //pulls hour from each block of time
        var timeSlot = $(this).data('time'); //*this* pulls data between class attr vs params with same name
        var time = parseInt(timeSlot);
        var ampm = timeSlot.split(' ')[1]; 

        if (ampm === 'PM' && time !== 12) { // differentiate am/pm
          time += 12;
        }

        if (currentTime === time) { // adds class to past/present/future
          $(this).addClass('present');
        } else if (currentTime > time) {
          $(this).addClass('past');
        } else {
          $(this).addClass('future');
        }
 })
})
setInterval(function(){ //build function into the dayjs clock display 
  const clockDisplay = dayjs().format("hh:mm:ss:a");
$("#currentTime").text(clockDisplay).text



}, 1000); // added in 1 second to keep it from updating more often than needed

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
  // TODO: Add code to display the current date in the header of the page