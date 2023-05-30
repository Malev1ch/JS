let circle = document.querySelector('.circle');
let btnRed = document.querySelector('.btn_red');
let btnYellow = document.querySelector('.btn_yellow');
let btnGreen = document.querySelector('.btn_green');
let btnReset = document.querySelector('.btn_reset');
let changeColor = (color) => {
    setTimeout(() => {
        circle.style.backgroundColor = color;
        console.log(color);
    }, 1000);
};

btnRed.addEventListener('click', () => {
    changeColor('red');
});

btnYellow.addEventListener('click', () => {
    changeColor('yellow');
});

btnGreen.addEventListener('click', () => {
    changeColor('green');
});

btnReset.addEventListener('click', () => {
    circle.style.backgroundColor = 'rgb(126, 125, 124)';
    console.log('Reset Color');
});