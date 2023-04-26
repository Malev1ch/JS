//Приветствие после ввода данных
// const userName = prompt("Enter your Name");
// const userSecondName = prompt("Enter your second Name")

// let congratulation = userName + " " + userSecondName;
// alert("Hello, dear:" + congratulation)

//Приветствие после ввода данных

const circles = document.querySelectorAll(".circle");
console.log(circles);
let activeLight = 0;

setInterval(() => {
    changeLight();
}, 1000);

function changeLight() {
    circles[activeLight].className = 'circle';
    activeLight++;

    if( activeLight > 2) {
        activeLight = 0
    }
    const currentLight = circles[activeLight];
    currentLight.classList.add(currentLight.getAttribute
        ("color"))
}