fetch("http://localhost:4500/products", {
  headers: {
    "Authorization": localStorage.getItem("token")
  },
}).then(res => res.json())
  .then(res => {
    console.log(res)
    display(res)
  })
  .catch(err => {
      location.href = "login.html",
      alert("Log in First")
console.log(err)
  })
let men = document.getElementById("mone200")
let women = document.getElementById("mone201")
let kids = document.getElementById("mone202")
let originals = document.getElementById("mone203")
let category = document.getElementById("categories")
let producties = document.getElementById("products")
let container = document.getElementById("cont")
men.addEventListener("click", () => {
  fetch(`http://localhost:4500/products?category=shoes`, {
    headers: {
      "Authorization": localStorage.getItem("token")
    },
  }).then(res => res.json())
    .then(res => {
      console.log(res)
      display(res)
    })
    .catch(err => {
    console.log(err)
    })
})
women.addEventListener("click", () => {
  fetch(`http://localhost:4500/products?category=heels`, {
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
  fetch(`http://localhost:4500/products?category=kids`, {
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
  fetch(`http://localhost:4500/products?category=allTrek`, {
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
  fetch("http://localhost:4500/products", {
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
  fetch("http://localhost:4500/products", {
    headers: {
      "Authorization": localStorage.getItem("token")
    },
  }).then(res => res.json())
    .then(res => {
      console.log(res)
      display(res)
    })
    .catch(err => {
      console.log(err)
    })
})
let searchTab = document.getElementById("searchtab")
let search = document.getElementById("search")
search.addEventListener("click", (e) => {
  e.preventDefault()
  fetch(`http://localhost:4500/products?search=${searchTab.value}`, {
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
      console.log(err)
    })
  console.log(searchTab.value)
})
let sub1 = document.getElementById("sub1")
sub1.addEventListener("change", () => {
    let value = sub1.value
    if (value == "Low to High") {
      fetch(`http://localhost:4500/products?sort=1}`, {
        headers: {
          "Authorization": localStorage.getItem("token")
        },
      }).then(res => res.json())
        .then(res => {
          console.log(res)
          display(res)
        })
        .catch(err => {
          console.log(err)
        })
      console.log(searchTab.value)
    } else if (value == "High to Low") {
      fetch(`http://localhost:4500/products?sort=-1`, {
        headers: {
          "Authorization": localStorage.getItem("token")
        },
      }).then(res => res.json())
        .then(res => {
          console.log(res)
          display(res)
        })
        .catch(err => {
          console.log(err)
        })
    }else if(value=="Popular Results"){
      fetch("http://localhost:4500/products", {
        headers: {
          "Authorization": localStorage.getItem("token")
        },
      }).then(res => res.json())
        .then(res => {
          console.log(res)
          display(res)
        })
        .catch(err => {
      console.log(err)
        })
    }
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
    let description = document.createElement("details");
    description.setAttribute("class", "moreBtn")
    description.innerText = el.description;
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
    card.append(image, name, category, price, delivery_in, rating, description, btn)
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