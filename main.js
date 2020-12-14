$(document).ready(function(e) {
// current date
 var today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
 document.getElementById("currentDay").innerHTML = today;

 

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

function storeContent() {

    $(".time-block").each(function () {
        var value = $(this).attr("value");
        var note = localStorage.getItem(value);

        if (note !== null) {
            $(this).children(".note").val(note);
        }
    });
    storecontent();
}

var button = $(".button");

button.on("click", function () {
    var presentHour = $(this).parent().attr("value");
    var note = $(this).siblings(".note").val();

    localStorage.setItem(presentHour, note);
});
