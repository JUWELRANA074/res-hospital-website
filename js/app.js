let manu = document.querySelector('#manu-btn');
let navbar = document.querySelector('.navbar');

manu.onclick = () => {
    manu.classList.toggle('fa-items');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    manu.classList.remove('fa-items');
    navbar.classList.remove('active');
}



