function menuToggle(){
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active')

}
let search = document.getElementById("searchs")
let searchTab = document.getElementById("search")
search.addEventListener("click", (e) => {
  e.preventDefault()
  location.href = "product.html"
  fetch(`https://distinct-pink-moth.cyclic.app/products?search=${searchTab.value}`, {
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

const gotos = ()=>{
  location.href = "product.html"
}

