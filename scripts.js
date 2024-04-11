const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonrSumAll = document.querySelector('.sum-all')
const buttonFilterVegan = document.querySelector('.filter-vegan')

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    return newValue
}

function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
    <li>
    <img src=${product.src}>
    <p>${product.name}</p>
    <p class="item-price">R$ ${formatCurrency(product.price)}</p>
    </li>
`
    })

    list.innerHTML = myLi
}




function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9
    }))


    showAll(newPrices)
}



function sumAllItems() {

    const total = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
    <li>
    <p>A soma de todos os itens do menu é R$ ${formatCurrency(total)} </p>
    </li >
        `

}

function filterVegan() {

    const veganFilter = menuOptions.filter(product => product.vegan)

    showAll(veganFilter)

}



buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonrSumAll.addEventListener('click', sumAllItems)
buttonFilterVegan.addEventListener('click', filterVegan)