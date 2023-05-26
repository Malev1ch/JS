//HW1-3 функция через рекурсию ниже код
//old
// function printArrayValues(arr) {
//  for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], 'array');
//    }
//   }
//old
//new
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
//new
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
