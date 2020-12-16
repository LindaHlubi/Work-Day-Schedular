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
        $(this).addClass("present bg-danger");
    }
     if (presentHour < hourBlock) {
         $(this).addClass("future");
     }
     
     if(presentHour > hourBlock) 
         $(this).addClass("past");
        
     
    })
}
colorCode();
   
})

 
$(".btn").click(function (){
    event.preventDefault();
    var hourBlock = $(this).parent().data("value");
    var note = $(this).siblings(".note").val();
    console.log("Does it work");
    localStorage.setItem(hourBlock, note);
});

function storeContent() {

    $(".time-block").each(function () {
        var hourBlock = $(this).attr("value");
        var note = localStorage.getItem(hourBlock);

        if (note !== null) {
            $(this).children(".note").val(note);
        }
    });
    storecontent();
}
