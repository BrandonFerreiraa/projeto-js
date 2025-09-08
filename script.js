const list = document.querySelector('ul');
const buttonShowAll = document.querySelector('.show-all');
const buttonShowDescont = document.querySelector('.show-descont');


function showAll() {
    let product = '';
    menuOptions.forEach((item) => {
        product += `<li>
    <img src="${item.src}" alt="${item.name}" />
    <p>${item.name}</p>
    <p class="item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</p>
    </li>`;
    });

    list.innerHTML = product;
}

function showDescont() {
    const productsDescont = menuOptions.map((item) => {
        item.price = item.price * 0.9;
        return item;
    })
}


buttonShowAll.addEventListener('click', showAll);
buttonShowDescont.addEventListener('click', showDescont)
