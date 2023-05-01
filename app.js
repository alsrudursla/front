// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");


const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form")
//const loginButton = document.querySelector("#login-form button");


const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    event.preventDefault();     // 브라우저의 기본 동작 막기
    loginForm.classList.add(HIDDEN_CLASSNAME); // form 에 클래스 추가 (hidden 클래스 추가 - css 에 정의되어 있음)
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);

    // greeting.innerText = "Hello " + username;
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//loginButton.addEventListener("click", onLoginBtnClick);
loginForm.addEventListener("submit", onLoginSubmit);


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    // show the greeting
    paintGreetings(savedUsername);
}