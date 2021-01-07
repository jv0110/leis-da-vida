const open_accordion = () => {
  const open_btn = document.querySelectorAll('.item .item-header');
  open_btn.forEach((btn, index) => {
    if(index > 0) btn.classList.add('closed');
    btn.addEventListener('click', e => {
      const icon = document.querySelectorAll('.faq .item .icon img')[index];
      if(btn.classList.contains('closed')){
        open_btn.forEach((btnOpen, indexOpen) => {
          if(!btnOpen.classList.contains('closed')){
            const contentOpen = document.querySelectorAll('.item .item-content')[indexOpen];
            const iconOpen = document.querySelectorAll('.faq .item .icon img')[indexOpen];
            btnOpen.classList.add('closed');
            contentOpen.classList.add('hide');
            iconOpen.src = './assets/images/plus.png';
          }
        });
        btn.classList.remove('closed');
        icon.src = './assets/images/minus.png';
      }else{
        icon.src = './assets/images/plus.png';
        btn.classList.add('closed');
      }
      const content = document.querySelectorAll('.item .item-content')[index];
      content.classList.toggle('hide');
    });
  });
}
open_accordion();