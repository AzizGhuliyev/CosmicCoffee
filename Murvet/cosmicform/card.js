const menuIcon = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");  


menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");    
});


const btn= document.getElementById("btn");
const fname=document.getElementById("fname");
const error=document.getElementById("nerror");
const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;

btn.addEventListener("click", (e) => {
    
if (fname.value == "" || fname.value ==null ) {
        error.innerHTML= "Zehmet olmasa doldur";
        return false;
    }else if(fname.value==regName){
        alert("salam");
    }


})