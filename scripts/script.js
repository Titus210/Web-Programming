// get navbar

const open_nav = document.getElementById('menu-open');
const close_nav = document.getElementById('menu-close');
const menu_nav = document.getElementById('nav-items');



open_nav.addEventListener('click', () => {
    open_nav.style.display = 'none';
    close_nav.style.display = 'flex';
    menu_nav.style.display = 'flex';
   
});     

close_nav.addEventListener('click',()=>{
    open_nav.style.display = 'flex';
    close_nav.style.display = 'none';
    menu_nav.style.display = 'none';
})



