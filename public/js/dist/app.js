let menuBtn = document.getElementById('menu-btn');
let mobileMenu = document.getElementsByClassName('mobile-menu')[0];
let closeBtn = document.getElementsByClassName('mobile-close')[0];
let mobileLink = document.querySelectorAll('.mobile-nav-link');

menuBtn.addEventListener('click', ()=>{
    mobileMenu.classList.add('mobile-menu-active')
})
menuBtn.classList.remove('menu-btn');

closeBtn.addEventListener('click', ()=>{
    mobileMenu.classList.remove('mobile-menu-active');
})
mobileLink.forEach((item)=>{
    item.addEventListener('click', ()=>{
        mobileMenu.classList.remove('mobile-menu-active')
    })
})
console.log("Hello")



// function isEmailValid(email){
//     return /\S+@\S+\.\S+/.test(email);
