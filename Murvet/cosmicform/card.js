const menuIcon = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");  


menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");    
});

$(".err").css("display", "none")

//! -------------- input 1 
$("#fname").focus(()=>{
    $(".err1").hide()
});
$("#fname").blur(()=>{
    if ($("#fname").val() == "") {
        $(".err1").show()
    }
});

//! -------------- input 2

$("#lname").focus(()=>{
    $(".err2").hide()
});
$("#lname").blur(()=>{
    if ($("#lname").val() == "") {
        $(".err2").show()
    }
});

//! -------------- input 3

$("#aname").focus(()=>{
    $(".err3").hide()
});
$("#aname").blur(()=>{
    if ($("#aname").val() == "") {
        $(".err3").show()
    }
});

//! -------------- input 4

$("#sname").focus(()=>{
    $(".err4").hide()
});
$("#sname").blur(()=>{
    if ($("#sname").val() == "") {
        $(".err4").show()
    }
});


//! -------------- input 5

$("#card").focus(()=>{
    $(".err5").hide()
});
$("#card").blur(()=>{
    if ($("#card").val() == "") {
        $(".err5").show()
    }
});

//! -------------- input 7

$(".month").focus(()=>{
    $(".err7").hide()
});
$(".month").blur(()=>{
    if ($(".month").val() == "") {
        $(".err7").show()
    }
});

//! -------------- input 6

$("#cardName").focus(()=>{
    $(".err6").hide()
});
$("#cardName").blur(()=>{
    if ($("#cardName").val() == "") {
        $(".err6").show()
    }
});


//! -------------- input 8

$(".year").focus(()=>{
    $(".err8").hide()
});
$(".year").blur(()=>{
    if ($(".year").val() == "") {
        $(".err8").show()
    }
});

//! -------------- input 9

$(".cvv").focus(()=>{
    $(".err9").hide()
});
$(".cvv").blur(()=>{
    if ($(".cvv").val() == "") {
        $(".err9").show()
    }
});