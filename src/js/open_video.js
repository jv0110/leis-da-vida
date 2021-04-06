const create_video = (url) => {
  const video = document.createElement('video');
  const source = document.createElement('source');

  video.classList.add('video');
  video.autoplay = true;
  video.controls = true;
  source.src = url;
  source.type = "video/mp4";

  video.appendChild(source);
  return video;
}
const open_video = () => {
  const videos = document.querySelectorAll('.video');
  videos.forEach((video, index) => {
    video.addEventListener('click', () => {
      const modal = document.querySelector('.video-modal');
      const video_url = video.getAttribute('data-video');
      const video_created = create_video(video_url);
      modal.style.display="block";
      modal.appendChild(video_created);

      /* ---- call close video ---- */
      close_video();
    });
  });
}
const close_video = () => {
  const close_btn = document.querySelector('.video-modal .close');
  
  close_btn.addEventListener('click', () => {
    const modal = document.querySelector('.video-modal');
    const video = document.querySelector('.video-modal .video');
    
    modal.style.display = "none";
    video.remove();
  });
}
open_video();