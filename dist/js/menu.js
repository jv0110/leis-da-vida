const open_menu = () => {
  const toggler = document.querySelector('.navigation .toggler');
  toggler.addEventListener("click", () => {
    const nav = document.querySelector('.navigation .nav');
    if(nav.classList.contains('hide-nav')){
      nav.classList.remove('hide-nav');
    }else{
      nav.classList.add('hide-nav');
    }
  });
}
open_menu();