let lastScrollTop;
navbar = document.getElementById('navbar');
window.addEventListener('scroll',()=>{
let scrollTop = window.pageYOffset;
if(scrollTop > lastScrollTop){
navbar.style.top='-90px';
}
else{
navbar.style.top='0';
}
lastScrollTop = scrollTop;
});