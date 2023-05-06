const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 내가 실행하고자 하는 function, 호출 간격격
//setInterval(sayHello, 5000); // 5000ms = 5초 간격
getClock();
setInterval(getClock, 1000);