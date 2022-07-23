// let lastScrollTop;
// if(window.screen.width > 700){
//     navbar = document.getElementById('navbar');
// window.addEventListener('scroll',()=>{
// let scrollTop = window.pageYOffset;
// if(scrollTop > lastScrollTop){
// navbar.style.top='-90px';
// }
// else{
// navbar.style.top='0';
// }
// lastScrollTop = scrollTop;
// });
// }

// for toggler
let toggleBtn = document.querySelector(".toggler");
let navBar = document.querySelector(".navbar");
let navBarItems = document.querySelector(".nav-items");
let toggleIcon = document.querySelector(".fa-bars");
toggleBtn.addEventListener("click", ()=>{
   navBarItems.addEventListener("click", ()=>{
      navBar.classList.remove("show-navbar");
      changeIcon()
   })
   navBar.classList.toggle("show-navbar");
   changeIcon()
})

function changeIcon(){
   if(navBar.classList.contains("show-navbar")){
      toggleIcon.classList.replace("fa-bars", "fa-xmark");
     }
     else{
      toggleIcon.classList.replace("fa-xmark", "fa-bars");
     }
}
