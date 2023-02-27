const onSignUp = () => {
    const payload = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    }
    fetch("https://distinct-pink-moth.cyclic.app/users/register", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res => {
            console.log(res)
        alert("Sign Up successfull")
        location.href = "login.html"
        })
        .catch(err => console.log(err))
}
let name = localStorage.getItem('name')
    let ename = document.getElementById("hname");
    ename.innerText = "Hello ," + name;