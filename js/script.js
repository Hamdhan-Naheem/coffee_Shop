let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cart.classList.remove('active');
    search.classList.remove('active');
}

let cart = document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
}

let search = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = ()=>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');
}

window.scroll = ()=>{
    navbar.classList.remove('active');
    cart.classList.remove('active');
    search.classList.remove('active');
}
