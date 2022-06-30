const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const count = document.querySelector("#count");
const totalPrice = document.querySelector("#totalPrice")
var priceCount = 1


plus.addEventListener("click", ()=>{
    priceCount++
    count.innerHTML = priceCount;
    var price = parseInt(priceCount) * 8;
    totalPrice.innerText = price;

});
var b = totalPrice.innerHTML
console.log(b);
// const a = totalPrice.innerHTML;
minus.addEventListener("click", ()=>{ 
    if(priceCount>1){
        priceCount--;
        count.innerHTML = priceCount;
        const totalPrice = document.querySelector("#totalPrice");
        totalPrice.innerHTML = totalPrice.innerHTML- 8
        
    }
});
