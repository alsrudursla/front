// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form")
//const loginButton = document.querySelector("#login-form button");

function onLoginSubmit(event) {
    //const username = loginInput.value;
    //console.log(username);
    event.preventDefault();
    console.log(loginInput.value)
}
//loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);