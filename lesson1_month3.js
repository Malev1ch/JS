///Рекурсия - вызывает саму себя.
// const rexExp = /Hello/gmi; //патторн
// const rexExp = new RegExp('Hello', 'gmi'); - конструктор

// function sayHello(str, subStr){
//     const rexExp = new RegExp(subStr);
//     return rexExp.test(str)
// }

// console.log(sayHello('Hello its me', 'me'));

//i
// console.log(/Hello/i.test('Hello its me')); //true
// console.log(/Hello/i.test('Hello its me')); //true
// console.log(/Hello/.test('Hello its me'));  //false

// const str = 'Hello, world';
// const regex = /world/;
// const result = str.match(regex);
// console.log(result);


//Поиск всех совпадений равных l
// const str = 'Hello world!';
// const regex = /l/g; //глобальный поиск
// const result = str.match(regex);
// console.log(result);

// const str = 'Hello, world!!!, HELLO, HeLLO, HEllo';
// const regex = /Hello/i; //поиск текста в глобальном тексте ( i - не чувствителен к регистру (т.е ему все равно на большие и маленькие буквы))
// const result = str.match(regex);
// console.log(result);

// const str = 'Hello\nWorld';
// const regex = /^world/gmi;
// const result = str.match(regex);
// console.log(result);

// let text = 'Привет, меня зовут Строка, но вы можете звать меня строка с маленькой буквы'
// let regex = /строка/gi;
// console.log(text.match(regex));

// let text = 'Привет, меня зовут Строка, но вы можете звать меня строка с маленькой буквы'
// let regex = /строка/gi;
// console.log(text.replace(regex, 'Alina'));

// const str = '123abc djj'
// const regex = /\d+/;
// const result = str.match(regex);
// console.log(result);

// const str = 'Hello, Wolrd!'
// const regex = /\w+/gmi;
// const result = str.match(regex);
// console.log(result);

// const str = 'Hello123world456'
// const regex = /\d/g;
// const result = str.match(regex);
// console.log(result);

// const str = 'Hello world';
// const regex = /world$/g;
// const result = str.match(regex);
// console.log(result);

// const str = `
// 1e место: Алина
// 2ое место: Олег
// 3е место: Айбек
// `
// const regex = /\d/g;
// const result = str.match(regex)
// console.log(result);

//2й вариант вывода
// console.log(str.match(/^\d/gm));

// const re = /(\w+)\s(w+)/;
// const text = 'Johny Dep';
// const result = text.replace(re, "$2, $1") //- Смена текста местами
// console.log(result);


// console.log(/\d\d/.test('28 August')); //true
// console.log(/\d\d\d/.test('28 August'));  //false

//Рекурсия
//Факториальные
//фибаначи
// let count = 0
// function recursion(){
//  count++;
//  console.log(count, '=');
// if(count === 10){
//     return;
// }else{
//     return recursion();
// }
// }

// recursion()

// function factorial (n) {
//     if(n === 0){
//         return 1;
//     }else {
//         return n * factorial(n -1)
//     }
// }

// console.log(factorial(4));


//HW1-3 функция через рекурсию ниже код
////old
// function printArrayValues(arr) {
//  for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], 'array');
//    }
//   }
////old
////new
// let printArrayValues = 0
// function recursion(){
//     printArrayValues++;
//     console.log(printArrayValues, 'array');
//     if(printArrayValues === 3){
//         return;
//     }else{
//         return recursion();
//     }
// }
// recursion()
////new
//HW1-3 функция через рекурсию

//HW2-3 поиск всех символов
// const symbols = 'My name 457 is Alex'
// const regex = /\w/g;
// const result = symbols.match(regex);
// console.log(result);
//HW2-3 поиск всех символов

//HW3-3 поиск пробельных символов
// const symbols = 'Hello\tWorld\nTest'
// const regex = /\s/g;
// const result = symbols.match(regex);
// console.log(result);
//HW3-3 поиск пробельных символов

//HW4-3 - поиск совпадений с буквой "o" и вывод количества совпадений в массиве
// function countChar(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         count++;
//       }
//     }
//     return count;
//   }
//   console.log(countChar('loremipsumdolor', 'o'));
  //HW4-3 - поиск совпадений с буквой "o" и вывод количества совпадений в массиве
