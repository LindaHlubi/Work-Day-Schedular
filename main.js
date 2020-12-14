$(document).ready(function() {
// current date
 var today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
 document.getElementById("currentDay").innerHTML = today;

 var $9AM = $("#9AM");
 var $10AM = $("#10AM");
 var $11AM = $("#11AM");
 var $12PM = $("#12AM");
 var $1PM = $("#1PM");
 var $2PM = $("#2PM");
 var $3PM = $("#3PM");
 var $4PM = $("#4PM");
 var $5PM = $("#5PM");
 
 var presentHour = moment().format('H');
 console.log(presentHour)
function colorCode() {

 $(".time-block").each(function() {
     var hourBlock = parseInt($(this).attr("value"));
     
     if (presentHour === hourBlock) {
        $(this).addClass("present");
    }
     else if (presentHour < hourBlock) {
         $(this).addClass("future");
     }
     
     else {
         (presentHour > hourBlock) 
         $(this).addClass("past");
        
     
    }
   
})

 }
 
colorCode();

})
// Local storage


$("#saveBtn").click (function(){
    localStorage.setItem("09AM", ($9AM.val()));
    localStorage.setItem("010AM", ($10AM.val()));
    localStorage.setItem("011AM", ($11AM.val()));
    localStorage.setItem("012PM", ($12PM.val()));
    localStorage.setItem("13PM", ($1PM.val()));
    localStorage.setItem("14PM", ($2PM.val()));
    localStorage.setItem("15PM", ($3PM.val()));
    localStorage.setItem("16PM", ($4PM.val()));
    localStorage.setItem("17PM", ($5PM.val()));

    //append  stored content
    $("#9AM").append(localStorage.getItem("09AM"));
    $("#10AM").append(localStorage.getItem("010AM"));
    $("#11AM").append(localStorage.getItem("011AM"));
    $("#12PM").append(localStorage.getItem("012PM"));
    $("#1PM").append(localStorage.getItem("13PM"));
    $("#2PM").append(localStorage.getItem("14PM"));
    $("#3PM").append(localStorage.getItem("15PM"));
    $("#4PM").append(localStorage.getItem("16PM"));
    $("#5PM").append(localStorage.getItem("17PM"));

});

  
})
