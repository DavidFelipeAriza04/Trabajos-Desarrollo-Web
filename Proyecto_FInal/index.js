AOS.init();

const menu = document.getElementById("menu");
const menu_icon = document.getElementById("nav-bar__menu");
const menu_links = document.getElementsByClassName("menu__link");

menu_icon.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
});

console.log(menu_links)
console.log(menu_links.length);

for(let i=0;i<menu_links.length;i++){
    menu_links[i].addEventListener("click",()=>{
        console.log("hola");
        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");
    })
};