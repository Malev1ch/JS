//JSON

// const character = {
//     name: "Luke Skywalker",
//     height: "175",
//     mass: "80",
//     hair_color: "blond",
//     skin_color: "yellow",
//     eye_color: "blue",
//     birth_year: "19YY",
//     gender: "male"
// }
// console.log(JSON.stringify(character));
// const json = '{"name":"Luke Skywalker","height":"175","mass":"80","hair_color":"blond","skin_color":"yellow","eye_color":"blue","birth_year":"19YY","gender":"male"}'
// const jedi = JSON.parse(json);
// console.log(jedi.name);
// console.log(jedi.gender);


// const person = {
//     name: "Johny Depp",
//     age: 30,
//     city: 'Kara-Balta'
// }

// console.log(JSON.stringify(person));
// const json = '{"name":"Johny Depp","age":30,"city":"Kara-Balta"}'
// const info = JSON.parse(json);
// console.log(person.name, person.age, person.city);


//Event Loop
//setTimeout

// setTimeout (() => {
//     console.log('Hello');
// }, 2000);

// const seconts = () => {
//     console.time();
//     setTimeout (() => {
//         console.log('4 seconds');
//         setTimeout(() => {
//             console.log('6 seconds');
//             setTimeout(() => {
//                 console.log('8 second');
//                 console.timeEnd();
//             }, 8000)
//         }, 6000)
//     }, 4000)
// }

// seconts();
//setTimeout


//setInterval

// let i = 0;
// let timeId = setInterval(() => {
//     i++;
//     // console.log('Hello All', i);
//     if(i >= 10){
//         clearInterval(timeId)
//     }
//     console.log('Hello All', i);
// }, 1000);
//setInterval

let time = document.querySelector('.time')
let btn = document.querySelector('.btn')
let btnReset  = document.querySelector('.btn_reset')
let btnPause = document.querySelector('.btn_pause')
let line = document.querySelector('.line')

let minutes = 0;
let seconds = 0;
let lineWidth = 0;
btnReset.style.display = 'none'
btnPause.style.display = 'none'
btn.addEventListener('click', () => {
    btn.disabled = true;
    btnReset.style.display = 'inline-block'
    btnPause.style.display = 'inline-block'
let timer = setInterval(() => {
        seconds++;
        if(minutes % 2 === 0){
            lineWidth+= 3.3333
        }else{
            lineWidth -= 3.3333
        }
        if(seconds === 60){
            minutes++
            seconds = 0
        }
        time.textContent = `${minutes < 10 ? 0 : ''}${minutes} : ${seconds < 10 ? 0 : ''}${seconds}`;
        line.style.width = lineWidth+ 'px'
    }, 100)

    btnReset.addEventListener('click', () => {
        btn.disabled = false
        seconds = 0;
        minutes = 0;
        time.textContent = `0${minutes} : 0${seconds}`;
        clearInterval(timer)
        btn.disabled = false
        btnReset.style.display = 'none'
        btnPause.style.display = 'none'
    })

    btnPause.addEventListener('click', () => {
        clearInterval(timer)
        btn.disabled = false;
        btnPause.style.display = 'none'
    })
})