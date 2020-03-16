let heightIntro = document.documentElement.clientHeight;
console.log(heightIntro);
let header = document.querySelector('#header');
const headers = document.querySelectorAll("[data-scroll]");

window.addEventListener('scroll', function headerFixed(){
    let pos = window.pageYOffset;
    console.log(pos);
    if (pos > heightIntro){
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }
});

headers.forEach(headersHandler);

function headersHandler(item){
    console.log(item);
    item.addEventListener('click', scrollToElem)
};

function scrollToElem(){
    const id = this.dataset.scroll;
    let element = document.getElementById(id);
    console.log(element);
    element.scrollIntoView({ behavior: 'smooth', block: "center"});
};