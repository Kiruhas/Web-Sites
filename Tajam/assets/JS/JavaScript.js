let heightIntro = document.documentElement.clientHeight;
let header = document.querySelector('#header');
const headers = document.querySelectorAll("[data-scroll]");
let navTog = document.querySelector('#nav-tog');
let nav = document.querySelector('#nav');

window.addEventListener('scroll', function headerFixed(){
    let pos = window.pageYOffset;
    if (pos > heightIntro){
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }

    if (navTog.classList.contains('active')){
        navTog.classList.remove('active');
        nav.classList.remove('active');
    }
});

navTog.addEventListener('click', openNav)

function openNav(){
    navTog.classList.toggle('active');
    nav.classList.toggle('active');
}

headers.forEach(headersHandler);

function headersHandler(item){
    item.addEventListener('click', scrollToElem)
    if (navTog.classList.contains('active')){
        navTog.classList.remove('active');
        nav.classList.remove('active');
    }
};

function scrollToElem(){
    const id = this.dataset.scroll;
    let element = document.getElementById(id);
    if (element.id == 'people_say'){
        element.scrollIntoView({ behavior: 'smooth', block: "center"});
    } else {
    element.scrollIntoView({ behavior: 'smooth', block: "start"});
    }
};

