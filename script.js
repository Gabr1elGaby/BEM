//class active

const navbarNav = document.querySelector('.navbar-nav');
const menuBox = document.querySelector('#menu-box');


//saat di klik
document.querySelector('#menu-box').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};



//luar sidebar agar hilang 



document.addEventListener('click', function(e) {
    if (!menuBox.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});



const subBtn = document.querySelector('.sub-btn');

    

$(document).ready(function() {
    $('.sub-btn').click(function() {

        $(this).next('.sub-menu').slideToggle();
    });
});
