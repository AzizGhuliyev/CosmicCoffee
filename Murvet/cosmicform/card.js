const menuIcon = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");  

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");    
});

$(".err").css("display", "none")

//! -------------- input 1 
$("#firstName").focus(()=>{
    $(".err1").hide()
});
$("#firstName").blur( ()=>{
    if ($("#firstName").val() == "") {
        $(".err1").show()
    }
});

//! -------------- input 2

$("#lastName").focus(()=>{
    $(".err2").hide()
});
$("#lastName").blur(()=>{
    if ($("#lastName").val() == "") {
        $(".err2").show()
    }
});

//! -------------- input 3

$("#areaName").focus(()=>{
    $(".err3").hide()
});
$("#areaName").blur(()=>{
    if ($("#areaName").val() == "") {
        $(".err3").show()
    }
});

//! -------------- input 4

$("#streetName").focus(()=>{
    $(".err4").hide()
});
$("#streetName").blur(()=>{
    if ($("#streetName").val() == "") {
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

