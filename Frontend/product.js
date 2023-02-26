fetch("http://localhost:4500/products/search/all", {
  headers: {
    "Authorization": localStorage.getItem("token")
  },
}).then(res => res.json())
  .then(res => {
    console.log(res)
    display(res)
  })
  .catch(err => {
    // location.href = "login.html",
    // alert("Log in First")
  })
let men = document.getElementById("mone200")
let women = document.getElementById("mone201")
let kids = document.getElementById("mone202")
let originals = document.getElementById("mone203")
let category = document.getElementById("categories")
let producties = document.getElementById("products")
let container = document.getElementById("cont")
men.addEventListener("click", () => {
  fetch("http://localhost:4500/products/shoes", {
    headers: {
      "Authorization": localStorage.getItem("token")
    },
  }).then(res => res.json())
    .then(res => {
      console.log(res)
      display(res)
    })
    .catch(err => {
      // location.href = "login.html",
      // alert("Log in First")
    })
})
women.addEventListener("click", () => {
  fetch("http://localhost:4500/products/heels", {
    headers: {
      "Authorization": localStorage.getItem("token")
    },
  }).then(res => res.json())
    .then(res => {
      console.log(res)
      display(res)
    })
    .catch(err => {
      // location.href = "login.html",
      // alert("Log in First")
    })
})
kids.addEventListener("click", () => {
  fetch("http://localhost:4500/products/kids", {
    headers: {
      "Authorization": localStorage.getItem("token")
    },
  }).then(res => res.json())
    .then(res => {
      console.log(res)
      display(res)
    })
    .catch(err => {
      // location.href = "login.html",
      // alert("Log in First")
    })
})
originals.addEventListener("click", () => {
  fetch("http://localhost:4500/products/allTrek", {
    headers: {
      "Authorization": localStorage.getItem("token")
    },
  }).then(res => res.json())
    .then(res => {
      console.log(res)
      display(res)
    })
    .catch(err => {
      // location.href = "login.html",
      // alert("Log in First")
    })
})
producties.addEventListener("click", () => {
  fetch("http://localhost:4500/products/", {
    headers: {
      "Authorization": localStorage.getItem("token")
    },
  }).then(res => res.json())
    .then(res => {
      console.log(res)
      display(res)
    })
    .catch(err => {
      // location.href = "login.html",
      // alert("Log in First")
    })
})
category.addEventListener("click", () => {
  fetch("http://localhost:4500/products/", {
    headers: {
      "Authorization": localStorage.getItem("token")
    },
  }).then(res => res.json())
    .then(res => {
      console.log(res)
      display(res)
    })
    .catch(err => {
      // location.href = "login.html",
      // alert("Log in First")
    })
})
let searchTab = document.getElementById("searchtab")
let search = document.getElementById("search")
search.addEventListener("click", () => {
  // fetch(`http://localhost:4500/products/search/${searchTab.value}`, {
  //   headers: {
  //     "Authorization": localStorage.getItem("token")
  //   },
  // }).then(res => res.json())
  //   .then(res => {
  //     console.log(res)
  //     display(res)
  //   })
  //   .catch(err => {
  //     // location.href = "login.html",
  //     // alert("Log in First")
  //   })
  console.log(searchTab.value)
})
function display(data) {
  container.innerHTML = null
  data.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("class", "cards")
    let name = document.createElement("h3");
    name.innerText = el.name
    let image = document.createElement("img");
    image.setAttribute("src", el.image);
    let category = document.createElement("p");
    category.innerText = "Category : - " + el.category
    let price = document.createElement("p");
    price.innerText = "Price : - " + "$ " + el.price;
    let delivery_in = document.createElement("p");
    delivery_in.innerText = "Delivered in : - " + el.delivery_In + " Days";
    let rating = document.createElement("p");
    rating.innerText = "Rating : -" + "⭐⭐⭐⭐";
    let description = document.createElement("p");
    description.setAttribute("class", "moreBtn")
    description.innerText = el.description;
    let dots = document.createElement("button");
    dots.innerText = "Description"
    dots.style.backgroundColor = "green"
    dots.style.fontSize = "20px"
    dots.style.marginLeft = "20px"
    dots.addEventListener("click", () => {
      description.style.display = "inline"
    })
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
    card.append(image, name, category, price, delivery_in, rating, dots, description, btn)
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
// module.exports ={display}