let container = document.getElementById("myre");
let cartData = JSON.parse(localStorage.getItem("cart"));
let emptyCart = document.getElementById("emptyCart")
let totalcart = document.getElementById("lenlenalg")
let ordercart = document.getElementById("len2424")
if (cartData === null) {
  cartData = [];
}
let sum = 0;
for (let i = 0; i < cartData.length; i++) {
  sum += cartData[i].price
}

if (cartData.length === 0) {
  emptyCart.innerText = "Empty Cart ! Buy Something😊"
  totalcart.innerText = 0;
  ordercart.innerText = 0;
} else {
  display(cartData)
  totalcart.innerText = sum;
  ordercart.innerText = sum + 10 + 12;

}
let plus = document.getElementsByClassName("plusplus")
let minus = document.getElementsByClassName("minusminus")
let cal = document.getElementsByClassName("calcal")
for(let i=0; i<plus.length; i++){
  plus[i].addEventListener("click",()=>{

      sum = sum - cartData[i].price * cal[i].innerText
      cal[i].innerText++;
      sum +=cartData[i].price*cal[i].innerText 
      totalcart.innerText = sum;
      ordercart.innerText = sum + 10 + 12;
      
      totalcart.innerText = sum;
      ordercart.innerText = sum + 10 + 12;
  })
}

for(let i=0; i<minus.length; i++){
  minus[i].addEventListener("click",()=>{
      sum = sum - cartData[i].price * cal[i].innerText
      cal[i].innerText--;
      sum += cartData[i].price*cal[i].innerText 
      totalcart.innerText = sum;
      ordercart.innerText =sum + 10+ 12;
  })
}
function display(data) {
  container.innerHTML = null;
  data.forEach((element, i) => {
    let card = document.createElement("div");
    card.setAttribute("class","cartCard")
    let image = document.createElement("img");
    image.setAttribute("src", element.image);
    let name = document.createElement("h3");
    name.innerText = element.name;
    let price = document.createElement("h4");
    price.innerText = "Price : - "+"$ " + element.price;
    let rating = document.createElement("h5");
    rating.innerText = "Rating : - "+ "⭐⭐⭐⭐"
    let increment = document.createElement("button");
    increment.setAttribute("class","plusplus")
    increment.innerText = "+";
    let quantity = document.createElement("span");
   quantity.setAttribute("class","calcal")
    quantity.innerText = 1
    let decrement = document.createElement("button");
    decrement.setAttribute("class","minusminus")
    decrement.innerText = "-";
    let br = document.createElement("br")
    let remove = document.createElement("button");
    remove.innerText = "Remove";
    remove.addEventListener("click", () => {
      cartData.splice(i, 1);
      localStorage.setItem("cart", JSON.stringify(cartData));
      display(cartData);
    })
    card.append(image, name, price,rating, increment, quantity, decrement,br,remove);
    container.append(card);
  });
}
let name = localStorage.getItem('name')
    let ename = document.getElementById("hname");
    ename.innerText = "Hello ," + name;
let orderComplete = document.getElementById("checkcheck")
orderComplete.addEventListener("click",()=>{
alert("Thanks for Shopping Visit again")
localStorage.clear()
location.reload()
})
