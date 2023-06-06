let menu = document.querySelector('.menu')
let row = document.querySelector('.row')
const getProducts = (category) => {
  fetch(`https://dummyjson.com/products/${category === 'all' ? '' : 'category/' + category}`)
    .then((res) => res.json())
    .then((res) => {
      res.products.forEach((item) => {
        row.innerHTML += `
          <div class="card">
            <img class="card__img" src="${item.thumbnail}" alt="">
            <h2 class="card__title">${item.title}</h2>
            <p class="card__subtitle">${item.description}</p>
            <p class="card__category">Категория: ${item.category}</p>
            <p class="card__price">Цена: ${item.price}</p>
            <p class="card__rating">Рейтинг: ${item.rating}</p>
          </div>
        `
      })
    })
}
getProducts('all')
const getCategories = () => {
    fetch('https://dummyjson.com/products/categories')
.then((res) => res.json())
.then((res) => { res.map((item) => {
    menu.innerHTML += `<li class='menu-item'>${item}</li>`
})
let menuItems = document.querySelectorAll('.menu-item')
Array.from(menuItems).map((item) => {
    item.addEventListener('click', () => {
        row.innerHTML = ''
        getProducts(item.textContent)
     })
   })
 })
}
getCategories()
