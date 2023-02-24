fetch("http://localhost:4500/products", {
  headers: {
    "Authorization": localStorage.getItem("token")
  },
}).then(res => res.json())
  .then(res => {
    console.log(res)
    display(res)
  })
  .catch(err => console.log(err))
let container = document.getElementById("cont")
function display(data) {
  data.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("class", "cards")
    let name = document.createElement("h3");
    name.innerText = el.name
    let image = document.createElement("img");
    image.setAttribute("src", el.image);
    let category = document.createElement("p");
    category.innerText = "Category : - " + el.category
    let description = document.createElement("h5");
    description.innerText = "Description : - " + el.description;
    let price = document.createElement("p");
    price.innerText = "Price : - " + "$ " + el.price;
    let delivery_in = document.createElement("p");
    delivery_in.innerText = "Delivered in : - " + el.delivery_In + " Days";
    let rating = document.createElement("p");
    rating.innerText = "Rating : -" + "⭐⭐⭐⭐";
    let btn = document.createElement("button");
    btn.innerText = "Add to Cart"
    btn.addEventListener("click", () => {
      let cartData = JSON.parse(localStorage.getItem("cart"));
      if (cartData === null) cartData = [];
      let alreadyinCart = false;
      for (let i = 0; i < cartData.length; i++) {
        if (cartData[i]._id === el._id) {
          alreadyinCart = true;
          break;
        };
      } if (alreadyinCart === true) {
        alert("Product is Already in the Cart");

      } else {
        cartData.push({ ...el });
        localStorage.setItem("cart", JSON.stringify(cartData));
        alert("Product Added To Cart");
      }

    })
    card.append(image, name, category, price, delivery_in, rating, btn)
    container.append(card)
  })
}
// let cont = document.getElementById("cont")
// let image1 = document.getElementById("image1")
// let image2 = document.getElementById("image2")
// let totalitem = document.getElementById("totalitem")
let name = localStorage.getItem('name')
let ename = document.getElementById("hname");
ename.innerText = "Hello ," + name;