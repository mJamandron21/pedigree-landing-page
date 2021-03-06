let loginForm = document.querySelector('.header .login-form');
let cartForm = document.querySelector('.header .cart-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () =>{
    cartForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');    
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}


const loadmore = document.querySelector('#loadMore');
    let currentItems = 8;
    loadmore.addEventListener('click', (e) => {
        const elementList = [...document.querySelectorAll('.box-container .box')];
        for (let i = currentItems; i < currentItems + 4; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'block';
            }
        }
        currentItems += 4;

        // Load more button will be hidden after list fully loaded
        if (currentItems >= elementList.length) {
            e.target.style.display = 'none';
        }
    })

