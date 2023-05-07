// Task 1 
// Напишите функцию, которая вернет текст внутри первого тэга -   li
// function getFirstListItemText() {
// const firstLiItem = document.querySelector('.list-item');
// return firstLiItem.textContent;
// }
// console.log(getFirstListItemText());

// let green = document.querySelector('.green')
// console.log(green.textContent);

// Task 2
// Напишите функцию, которая вернет массива с текстами внутри тэгов - li

// function getLiTexts() {
//     const liElements = document.getElementsByTagName("li");
//     const texts = [];
//     for (let i = 0; i < liElements.length; i++) {
//       texts.push(liElements[i].textContent);
//     }
//     return texts;
//   }
//   console.log(getLiTexts()); 


// Task 3
// Напишите функцию, которая вернет массива с текстами внутри тэгов   элементов с классом list-item 
// function getTexts() {
//     const listItems = document.querySelectorAll('.list-item');
//     const texts = [];
//     listItems.forEach(item => {
//       texts.push(item.textContent);
//     });
//     return texts;
//   }
//   console.log(getTexts());

// Task 4
// Напишите функцию, которая вернет массив   со значениями аттрибута class внутри тэгов элементов с классом list-item
// function getClassValues() {
//     const listItems = document.querySelectorAll('.list-item');
//     const classValues = [];
//     for (let i = 0; i < listItems.length; i++) {
//       classValues.push(listItems[i].getAttribute('class'));
//     }
//     return classValues;
//   }
//   console.log(getClassValues());

// Task 5
// Напишите функцию, которая вернет массива со значениями аттрибута data-test-id  внутри тэгов элементов с классом  list-item.
// Этот аттрибут написан для тестирования программ специальным роботом и по нему этот робот находит нужные элементы. Цель его - дать возможность роботу зацепиться за нужные элементы.
// function getTestDataIds() {
//     const listItems = document.querySelectorAll('.list-item');
//     const testDataIds = [];
//     for (let i = 0; i < listItems.length; i++) {
//       testDataIds.push(listItems[i].getAttribute('data-test-id'));
//     }
//     return testDataIds;
//   }
//   console.log(getTestDataIds());

// Task 6
// Вы пишите робота, который проверяет, что страница отображается корректно, по правилам внутри класс с текстом цвета.

//  <li class="list-item green" data-test-id=«1">green</li>

// Но база данных была повреждена и по ошибке некоторые элемента стали отображаться с некорректными цветами.

//  <li class="list-item orange" data-test-id=«3">yellow</li>

//  Ваша задача вернуть массив аттрибутов data-test-id  у элементов, у которых сломана логика. То есть текст внутри не имеет соответсвующего класса.

// Используйте map для обхода массива. Иными словами элемент считается сломанным если в классах не содержится текста элемента.

// const listItems = document.querySelectorAll('.list-item');
// const brokenItems = [];
// listItems.forEach(item => {
//   const classes = item.classList;
//   const text = item.textContent.trim();
//   if (!classes.contains(text)) {
//     brokenItems.push(item.getAttribute('data-test-id'));
//   }
// });
// console.log(brokenItems); // ["3", "5"]



// Task 7
// Обновите текст всех элементов с классом list-item,  по следующему шаблону

//  <li class="list-item green" data-test-id=‘1’>green</li>

// Стало

//  <li class="list-item green" data-test-id=  ‘1’> 1 green</li>

// То есть  ${data-test-id} ${text}
// Используйте forEach

// yourElementsArray.forEach ( (element) => {


// } )

// const elementsArray = document.querySelectorAll('.list-item');
// elementsArray.forEach((element) => {
//   const text = element.textContent.trim();
//   const dataTestId = element.getAttribute('data-test-id');
//   element.textContent = `${dataTestId} ${text}`;
// });

// Task 8
//  На сайте есть поле для ввода с id = ‘secret-login’.  Ваша задача - изменить его содержимое на You were hacked
// document.getElementById('secret-login').value = 'You were hacked';
// console.log(getElementById);
