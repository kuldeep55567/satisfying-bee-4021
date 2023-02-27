const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});
// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
})
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');
searchButton.addEventListener('click', function (e) {
    if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if (searchForm.classList.contains('show')) {
            searchButtonIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }
    }
})
if (window.innerWidth < 768) {
    sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
    searchButtonIcon.classList.replace('bx-x', 'bx-search');
    searchForm.classList.remove('show');
}
window.addEventListener('resize', function () {
    if (this.innerWidth > 576) {
        searchButtonIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
})
const switchMode = document.getElementById('switch-mode');
switchMode.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
})
let add = document.getElementById("add");
let update = document.getElementById("update");
let del = document.getElementById("del");
let crud = document.getElementById("crud");
let cr = document.getElementById("cr");
let section = document.getElementById("todel")
let containers = document.getElementById("container")
let container1 = document.getElementById("container1")
let container2 = document.getElementById("container2")
add.addEventListener("click", () => {
    section.style.display = "none";
    crud.innerText = "CRUD Operations";
    cr.innerText = "Add";
    containers.style.display = "block";
})
del.addEventListener("click", () => {
    crud.innerText = "CRUD Operations";
    cr.innerText = "Delete";
    section.style.display = "none";
    container1.style.display = "block";
})
update.addEventListener("click", () => {
    crud.innerText = "CRUD Operations";
    cr.innerText = "Update";
    section.style.display = "none";
    container2.style.display = "block";
})
let form = document.getElementById("form");
let baseURL = "https://distinct-pink-moth.cyclic.app/products";
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let name = document.getElementById("name").value;
    let image = document.getElementById("image").value;
    let category = document.getElementById("category").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
    let delivery = document.getElementById("delivery").value;
    fetch(`${baseURL}/add`, {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            image: image,
            category: category,
            description: description,
            price: price,
            delivery_In: delivery
        }),
        headers: {
            "Content-type": "application/json; carset=UTF-8",
            "Authorization": localStorage.getItem("token"),
        }
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data)
            // display(data)
        })
})
//UPDATE METHOD
let form2 = document.getElementById("form2");
form2.addEventListener("submit", (e) => {
    e.preventDefault()
    let idu = document.getElementById("idu").value;
    let nameu = document.getElementById("nameu").value;
    let imageu = document.getElementById("imageu").value;
    let categoryu = document.getElementById("categoryu").value;
    let descriptionu = document.getElementById("descriptionu").value;
    let priceu = document.getElementById("priceu").value;
    let deliveryu= document.getElementById("deliveryu").value;
    fetch(`${baseURL}/update/${idu}`, {
        method: 'PATCH',
        body: JSON.stringify({
            name: nameu,
            image: imageu,
            category: categoryu,
            description: descriptionu,
            price: priceu,
            delivery_In: deliveryu
        }),
        headers: {
            "Content-type": "application/json; carset=UTF-8",
            "Authorization": localStorage.getItem("token"),
        }
    })
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data)
            // display(data)
        })
})
//DELETE METHOD

let form1 = document.getElementById("form1")
form1.addEventListener("submit", (e) => {
    e.preventDefault()
    let ids = document.getElementById("ids").value;
    let options = {
        method: "DELETE"
    }
    fetch(`${baseURL}/delete/${ids}`, options)
        .then(response => console.log(response.status))

})
// USERS DATA FOR ADMIN

fetch("https://distinct-pink-moth.cyclic.app/users")
    .then(res =>res.json())
    .then(res => {
        console.log(res)
    displayUsers(res)
    })
let tbody = document.getElementById("tbody")
function displayUsers(user) {
    user.reverse().forEach((el) => {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let inTd = document.createElement("p");
        inTd.innerText = el.name;
        let td1 = document.createElement("td");
        td1.innerText = el.email;
        let td2 = document.createElement("td")
        let span = document.createElement("span")
        span.innerText = el.is_admin;
        let details = document.createElement("details");
      details.innerText = "hello for now"
        td.append(inTd)
        td2.append(span)
        tr.append(td,td1,td2,details)
        tbody.append(tr)
    })
}
let logout = document.getElementById("logout")
logout.addEventListener("click",()=>{
    location.href = "index.html"
})
let adminUpdate = document.getElementById("userUpdate")
let adminControl = document.getElementById("adminc");
adminControl.addEventListener("click",()=>{
    if(localStorage.getItem("admin")==2){
        section.style.display = "none";
        crud.innerText = "CRUD Operations";
        cr.innerText = "Admin Role";
        adminUpdate.style.display = "block";
    }else{
        alert("You Are Not Authorized ")
    }
})
let formUser = document.getElementById("formUser");
formUser.addEventListener("submit",(e)=>{
    e.preventDefault();
    let userID = document.getElementById("userId");
    let userRole = document.getElementById("userRole");
    fetch(`https://distinct-pink-moth.cyclic.app/users/update/${userID.value}`,{
        method:'PATCH',
        body:JSON.stringify({
            is_admin:userRole.value
        }),
        headers:{
            "Content-type":"application/json",
            "Authorization": localStorage.getItem("token")
        }
    })
    .then(res => res.json())
    .then(res => {
        console.log(res)
        alert(`Role Updated`)
    })
    .catch(err => {
        console.log(err)
    })
})
let team = document.getElementById("team")
let about = document.getElementById("aboutme")
team.addEventListener("click",()=>{
    section.style.display = "none";
    crud.innerText = "ABOUT";
    cr.innerText = "About me";
    about.style.display = "block";
})