const play_video = () => {
  const play_btn = document.querySelectorAll('.videos .swiper-slide .play-btn');
  const videos = document.querySelectorAll('.videos .swiper-slide video');

  play_btn.forEach((btn, index) => {
    btn.addEventListener('click', e => {
      videos.forEach((videoPlay, index2) => {
        if(index2 !== index) videoPlay.pause();
      });
      const video = videos[index];
      const heading = document.querySelectorAll('.videos .video-container .heading')[index];
      heading.style.zIndex = 1;
      video.style.zIndex = 1;
      video.autoplay = true;
      video.controls = true;
      video.load();
    });
  });
}
play_video(); 