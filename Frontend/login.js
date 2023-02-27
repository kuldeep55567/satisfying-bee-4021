const onlogin = () => {
    const payload = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    fetch("https://distinct-pink-moth.cyclic.app/users/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.token)
            localStorage.setItem("admin", res.admin)
            localStorage.setItem("name", res.name)
            if (localStorage.getItem("admin") >= 1) {
                popup.classList.add("open-popup")
            } else if( (localStorage.getItem("admin") == 0)) {
                location.href = "index.html"
            }else{
                alert("Wrong Password")
            }

        })
        .catch(err => {
            console.log(err)
            alert("Wrong Password")
        })
}
let popup = document.getElementById("popup");
function closepopup() {
    popup.classList.remove("open-popup")
    location.href = "admin.html";
}
function mainPage() {
    popup.classList.remove("open-popup")
    location.href = "index.html";
}