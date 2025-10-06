const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttonShowDescont = document.querySelector('.show-descont');
const sumAll = document.querySelector('.sum-all');
const filterVegan = document.querySelector('.filter-vegan');


function showAll(productsArray) {
    let product = '';
    productsArray.forEach((item) => {
        product += `<li>
    <img src="${item.src}" alt="${item.name}" />
    <p>${item.name}</p>
    <p class="item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</p>
    </li>`;
    });

    list.innerHTML = product
}

function showDescont() {
    const productsDescont = menuOptions.map((item) => ({
        ...item,
        price: item.price * 0.9,

    }))

    showAll(productsDescont)
}

function sumAllPrices (){ 
    const totalItens = menuOptions.reduce((acc, item) => acc + item.price, 0);
    list.innerHTML = `<li>
    <p>O preço total dos lanches é R$ ${totalItens.toFixed(2).replace('.', ',')}</p>
    </li>`
}

function filterVeganItems() {
    const veganItems = menuOptions.filter(item => item.vegan);
    showAll(veganItems);
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions));
buttonShowDescont.addEventListener('click', showDescont)
sumAll.addEventListener('click', sumAllPrices)
filterVegan.addEventListener('click', filterVeganItems)
