//Triangle

// var triangle = "#";

// do {
//     console.log(triangle);
//     triangle += "#";
// } while (triangle.length <= 7);

//Triangle

//FizzBuzz

// for (var i = 1; i <= 100; i++) {
//     if ( !(i % 3) && !(i % 5) ) {
//         console.log(i, "FizzBuzz");
//     } else if ( !(i % 3) ) {
//         console.log(i, "Fizz");
//     } else if ( !(i % 5) ) {
//         console.log(i, "Buzz");
//     }
// }

//FizzBuzz

//chessboard

// var chessboard = 8,
//     totalSize = chessboard * chessboard,
//     line = "",
//     flag = true;


// function createLine(chessboard, flag) {
//     var result = "";
//     for (var i = 0; i < chessboard; i++) {
//         (i % 2) ? result += "#" : result += " ";
//     }
//     if (flag) {
//         result = reverseString(result);
//     }
//     return result;
// }

// function reverseString(str) {
//     var result = "";
//     for (var i = str.length - 1; i > 0; i--) {
//         result += str[i];
//     }
//     return result;
// }


// for (var i = 1; i <= chessboard; i++) {
//     if (flag) {
//         flag = false;
//     } else {
//         flag = true;
//     }
//     console.log(createLine(chessboard, flag));
// }

//chessboard

//4dop
// const mass = ['Alex', 'Anna', 'Oleg', '1', '2', '3', true]
// console.log(mass);
//4dop

//5dop
// let array =  ['Алина', 'Саша', 'Алекс'];
// console.log(array [0]);
//5dop

//6dop
// let arr1 = [1, true, false, undefined];
// let arr2 = ['Sasha', 'Alina', false, undefined];

// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i] !== undefined) {
//     arr1[i] = arr2[i];
//   }
// }

// console.log(arr1);

//6dop

//chessboard
// let size = 8; 
// let board = ""; 

// for (let y = 0; y < size; y++) { 
//   for (let x = 0; x < size; x++) { 
//     if ((x + y) % 2 === 0) { 
//       board += " "; 
//     } else {
//       board += "#"; 
//     }
//   }
//   board += "\n"; 
// }

// console.log(board);
//chessboard

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


// console.log(document);
// document.body
// console.log(document.body);


//----получение
// let h1 = document.getElementsByTagName('h1')
// console.log(h1);

// let btn = document.getElementById('myId')
// console.log(btn);

// let h1 = document.getElementsByTagName('h1')
// console.log(h1);


// let text = document.querySelector('h1')
// let textClass = document.querySelector('.text')
// let textId = document.querySelector('#textId')
// let listItems = document.querySelectorAll('.list-item')

// console.log(text);
// console.log(textClass);
// console.log(textId);
// console.log(listItems);


// получить элемент тэгом h2 и с классом text
//получить элемент с id = green
//получить все элементы с классом item
// let h2 = document.querySelector('h2.text')
// let green = document.querySelector('#green')
// let items = document.querySelectorAll('.item')
// console.log(h2);
// console.log(green);
// console.log(items);




//---текст
// let text = document.querySelector('h1')
// console.log(text);
// console.log(text.textContent);
// console.log(text.innerText);
// console.log(text.innerHTML);

// text.textContent = 'lorem<span>lorem</span> lorem'
// text.innerText = 'Hello'

// text.innerHTML = 'Hello <span>Lorem</span>'

// console.log(text.textContent);
// console.log(text.innerHTML);

// let item = document.querySelectorAll('.list-item')
// console.log(item);
// console.log(Array.from(item));

// Array.from(item).forEach((item, idx) =>{
//     item.textContent += idx + 1
// })

// let text = document.querySelectorAll('.text')
// Array.from(text).forEach((item) => {
//     item.textContent = item.textContent.slice(0, -1)
//     item.textContent = `${item.textContent.slice(0, -1)}!`
// })

//---стили
// let h1 = document.querySelector('h1')
// console.log(h1.style);
// h1.style.color = 'red'
// h1.style.textAlign = 'center'
// h1.style.fontSize= '100px'
//  h1.style.fontSize= 20 + 'px'

//  h1.style.cssText = 'color: red; text-align: center; font-size: 10px'

//получить элемент с классом circle
//задать размер 100px 100px
//задать задний фон и дать границы (border) и сделать круг

// let circle = document.querySelector('.circle')
// circle.style.width = '100px'
// circle.style.height = '100px'
// circle.style.background = 'red'
// circle.style.border = '5 px solid black'
// circle.style.borderRadius = '50%'

//получить элементы с классом list-item
//четные элементы сделать красного цвета, а нечетные синего
//каждому элементу созать линию снизу (textDecoration)
//и добавить к каждому элементу текст it (item it)

// let item1 = document.querySelectorAll('.list-item')
// Array.from(item1).forEach((item, idx) => {
//     if(idx % 2 === 0){
//         item.style.color = 'red'
//     }else{
//         item.style.color = 'blue'
//     }

//     item.style.textDecoration = 'underline'
//     item.textContent = `${item.textContent} it`
// })

//-----классы-----
// let h1 = document.querySelector('h1')
// console.log(h1.className);
// console.log(h1.classList);

// console.log(h1.classList.contains('black'));

// h1.classList.add('black')
// h1.classList.remove('red')
// h1.classList.remove('red')
// h1.classList.toggle('green')
// h1.classList.replace('white', 'blue')




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

let users = [
    {
	"id": 1,
	"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
	"price": 109.95,
	"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
	"category": "men's clothing",
	"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
	"rating": {
		"rate": 3.9,
		"count": 120
	}
}, {
	"id": 2,
	"title": "Mens Casual Premium Slim Fit T-Shirts ",
	"price": 22.3,
	"description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
	"category": "men's clothing",
	"image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
	"rating": {
		"rate": 4.1,
		"count": 259
	}
}, {
	"id": 3,
	"title": "Mens Cotton Jacket",
	"price": 55.99,
	"description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
	"category": "men's clothing",
	"image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
	"rating": {
		"rate": 4.7,
		"count": 500
	}
}, {
	"id": 4,
	"title": "Mens Casual Slim Fit",
	"price": 15.99,
	"description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
	"category": "men's clothing",
	"image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
	"rating": {
		"rate": 2.1,
		"count": 430
	}
}, {
	"id": 5,
	"title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
	"price": 695,
	"description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
	"category": "jewelery",
	"image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
	"rating": {
		"rate": 4.6,
		"count": 400
	}
}, {
	"id": 6,
	"title": "Solid Gold Petite Micropave ",
	"price": 168,
	"description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
	"category": "jewelery",
	"image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
	"rating": {
		"rate": 3.9,
		"count": 70
	}
}, {
	"id": 7,
	"title": "White Gold Plated Princess",
	"price": 9.99,
	"description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
	"category": "jewelery",
	"image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
	"rating": {
		"rate": 3,
		"count": 400
	}
}, {
	"id": 8,
	"title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
	"price": 10.99,
	"description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
	"category": "jewelery",
	"image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
	"rating": {
		"rate": 1.9,
		"count": 100
	}
}, {
	"id": 9,
	"title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
	"price": 64,
	"description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
	"category": "electronics",
	"image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
	"rating": {
		"rate": 3.3,
		"count": 203
	}
}, {
	"id": 10,
	"title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
	"price": 109,
	"description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
	"category": "electronics",
	"image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
	"rating": {
		"rate": 2.9,
		"count": 470
	}
}, {
	"id": 11,
	"title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
	"price": 109,
	"description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
	"category": "electronics",
	"image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
	"rating": {
		"rate": 4.8,
		"count": 319
	}
}, {
	"id": 12,
	"title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
	"price": 114,
	"description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
	"category": "electronics",
	"image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
	"rating": {
		"rate": 4.8,
		"count": 400
	}
}, {
	"id": 13,
	"title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
	"price": 599,
	"description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
	"category": "electronics",
	"image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
	"rating": {
		"rate": 2.9,
		"count": 250
	}
}, {
	"id": 14,
	"title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
	"price": 999.99,
	"description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
	"category": "electronics",
	"image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
	"rating": {
		"rate": 2.2,
		"count": 140
	}
}, {
	"id": 15,
	"title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
	"price": 56.99,
	"description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
	"category": "women's clothing",
	"image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
	"rating": {
		"rate": 2.6,
		"count": 235
	}
}, {
	"id": 16,
	"title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
	"price": 29.95,
	"description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
	"category": "women's clothing",
	"image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
	"rating": {
		"rate": 2.9,
		"count": 340
	}
}, {
	"id": 17,
	"title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
	"price": 39.99,
	"description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
	"category": "women's clothing",
	"image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
	"rating": {
		"rate": 3.8,
		"count": 679
	}
}, {
	"id": 18,
	"title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
	"price": 9.85,
	"description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
	"category": "women's clothing",
	"image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
	"rating": {
		"rate": 4.7,
		"count": 130
	}
}, {
	"id": 19,
	"title": "Opna Women's Short Sleeve Moisture",
	"price": 7.95,
	"description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
	"category": "women's clothing",
	"image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
	"rating": {
		"rate": 4.5,
		"count": 146
	}
}, {
	"id": 20,
	"title": "DANVOUY Womens T Shirt Casual Cotton Short",
	"price": 12.99,
	"description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
	"category": "women's clothing",
	"image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
	"rating": {
		"rate": 3.6,
		"count": 145
	}
}]

// let div_cards = document.querySelector('.div_cards')  

// const addUserInRow = () => {
//   users.forEach((item) => {
//       let card = document.createElement('div')
//       let image = document.createElement('image')
//       let title = document.createElement('h2')
//       let price = document.createElement('p')
//       let description = document.createElement('p')
//       let category = document.createElement('p')

//         image.getAttribute('src', item.image)

//       card.classList.add('card')
//       image.classList.add('image')
//       title.classList.add('card__title')
//       price.classList.add('card__price')
//       description.classList.add('card__description')
//       category.classList.add('card__category')

//       image.textContent = item.image
//       title.textContent = item.name
//       price.textContent = `Цена: ${item.price}`
//       description.textContent = `Описание: ${item.description}`
//       category.textContent = `Категория: ${item.category}`
    
//       card.append(image)
//       card.append(title)
//       card.append(price)
//       card.append(description)
//       card.append(category)

//       div_cards.append(card)

//   })
// }

// addUserInRow()

let div_cards = document.querySelector('.div_cards')  
const cardsTest = () => {
  users.forEach((item) => {
      let card = document.createElement('div')
      let image = document.createElement('img')
      let title = document.createElement('h2')
      let price = document.createElement('p')
      let description = document.createElement('p')
      let category = document.createElement('p')
      image.setAttribute('src', item.image )
      card.classList.add('card')
      image.classList.add('image')
      title.classList.add('card__title')
      price.classList.add('card__price')
      description.classList.add('card__description')
      category.classList.add('card__category')
      title.textContent = item.title
      description.textContent = `Описание: ${item.description}`
      category.textContent = `Категория: ${item.category}`
      price.textContent = `Цена: ${item.price}`

      card.append(image)
      card.append(title)
      card.append(description)
      card.append(category)
      card.append(price)
      div_cards.append(card)
  })
}
cardsTest()