
let menu = document.querySelector('.ham-menu');
let ham1 = document.querySelector('.ham-layer-top');
let ham2 = document.querySelector('.ham-layer-mid');
let ham3 = document.querySelector('.ham-layer-bottom');
let navLinks = document.querySelector('.nav-links');
let navLinkButtons = document.querySelectorAll('.nav-link');
let navCartTotal = document.querySelector('.cart-total');

// navigation
menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    ham1.classList.toggle('active');
    ham2.classList.toggle('active');
    ham3.classList.toggle('active');
})

navLinkButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        ham1.classList.toggle('active');
        ham2.classList.toggle('active');
        ham3.classList.toggle('active');
    })
})

let noOfCartItems = async ()=>{
    let url = '/cartItemsTotal';
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.total);
    if(data.total == 0){
        navCartTotal.innerHTML = 0;
    }else{
        navCartTotal.innerHTML = data.total;
    }
}