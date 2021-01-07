let timer = "";
const incrementScroll = () => {
  return setInterval(() => {
    let testimonies = document.querySelector('.testimonies-carousel');
    testimonies.scrollBy(0, 200);
  }, 2000);
}
const clearTimer = (timer) => {
  let testimonies = document.querySelector('.testimonies-carousel');
  testimonies.addEventListener('scroll', () => {
    if(testimonies.offsetHeight + testimonies.scrollTop >= testimonies.scrollHeight) {
      setTimeout(() => {
        testimonies.scrollTop = 0;
        clearInterval(timer);
      }, 3000);
      const returnTop = setTimeout(() => {
        timer = incrementScroll();
      }, 4000);
    }
  });
}
timer = incrementScroll();
clearTimer(timer);