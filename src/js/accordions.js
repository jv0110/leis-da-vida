const close_opened_accordions = (accordion) => {
  const content = document.querySelectorAll('.item-content');
  content.forEach((content, index) => {
    if(index !== accordion){
      content.classList.add('hide');
    }
  });
}
const plus_icon = (icons) => {
  [...icons].forEach(icon => {
    icon.src="./assets/images/plus.png";
  });
}
const minus_icon = (icons) => {
  [...icons].forEach(icon => {
    icon.src="./assets/images/minus.png";
  });
}
const change_first_button_bg = () => {
  const open_btn = document.querySelectorAll('.item .item-header')[0];
  open_btn.style.backgroundColor = "#2630E0";
}
const change_buttons_style = () => {
  const content = document.querySelectorAll('.item-content');
  content.forEach((cont, index) => {
    if(cont.classList.contains('hide')){
      cont.previousElementSibling.style.backgroundColor = "#121444";
      const icons = cont.previousElementSibling.getElementsByTagName('img')
      plus_icon(icons);
    }else{
      cont.previousElementSibling.style.backgroundColor = "#2630E0";
      const icons = cont.previousElementSibling.getElementsByTagName('img')
      minus_icon(icons);
    }
  });
}

const open_accordion = () => {
  const open_btn = document.querySelectorAll('.item .item-header');
  open_btn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const content = document.querySelectorAll('.item-content')[index];
      if(content.classList.contains('hide')){
        content.classList.remove('hide');
        btn.style.backgroundColor = "#2630E0";
      }else{
        content.classList.add('hide');
        btn.style.backgroundColor = "#121444";
      }
      close_opened_accordions(index);
      change_buttons_style();
    });
  });
}
change_first_button_bg();
open_accordion();