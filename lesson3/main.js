//HW-1
//Функция определения наименьшего числа
// function number(a, b) {
//   if (a < b)
//     return a;
//   else
//     return b;
// }
// console.log(number(0, 10));
// в данном случае 0 меньше 10.
//HW-1

//HW-2
// function exponentiation(number, power) {
//     if (power === 0) return 1;
//     if (number === 0) return 0;
//     if (number === 1) return 1; 
//     let result = 1;
//     while (power !== 0) {
//       result = result * number;
//       power = power - 1;
//     }
//     return result;
// }
// const number = +prompt("Введите число");
// const degree = +prompt("Введите степень");
// alert ("Результат: " + exponentiation(number, degree));
//HW-2

//HW-3
// function sumArray(arr) {
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// sum += arr[i];
// }
// return sum;
// }
// const myArr = [1, 2, 3, 4, 5];
// console.log(sumArray(myArr)); // 15
// //HW-3

//HW-4
// const sendMessage = {
//     phoneNumber: '123456789',
//     messageText: 'Hello, world!',
//     senddMessage: function() {
//       console.log('Sending to number: ' + this.phoneNumber + ' Message: ' + this.messageText);
//     }
//   }
//   sendMessage.senddMessage();
//HW-4
  
//HW-5
// const bankAccount = {
//     accountNumber: '123456789',
//     balance: '1000',
//     sendTransfer: function(accountNumber, amount) {
//         console.log('Sending ' + amount + ' to account ' + accountNumber);
//         this.balance -= amount;
//         }
//     };
    
//     console.log('Balance:' + bankAccount.balance);
//     bankAccount.sendTransfer("987654321", 500);
//     console.log('New Balance:' + bankAccount.balance);
//HW-5
