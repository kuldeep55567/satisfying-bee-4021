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
let baseURL = "http://localhost:4500/products";
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
            "Authorization":localStorage.getItem("token"),
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
let formDelete = document.getElementById("form1");
