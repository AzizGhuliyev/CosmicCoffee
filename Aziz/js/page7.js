const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const count = document.querySelector("#count");
const totalPrice = document.querySelector("#totalPrice");
const promoCode = document.querySelector(".promo-code");
const addBtn = document.querySelector(".add-btn");
var priceCount = 1


var promoCodes = ["4p30", "fcp50", "fcp60",];

plus.addEventListener("click", ()=>{
    priceCount++
    count.innerHTML = priceCount;
    var price = parseInt(priceCount) * 8;
    totalPrice.innerText = price;

});
var b = totalPrice.innerHTML

minus.addEventListener("click", ()=>{ 
    if(priceCount>1){
        priceCount--;
        count.innerHTML = priceCount;
        const totalPrice = document.querySelector("#totalPrice");
        totalPrice.innerHTML = totalPrice.innerHTML- 8
        
    }
});

addBtn.addEventListener("click", () => {
    if(!promoCode.value){
        
        return   alert("Please enter a promoCode")
    }
    if(promoCode.value === promoCodes[0]){
        var isPanel = false

        var result = totalPrice.innerHTML / 10;
        return totalPrice.innerText = result;
    }
})
