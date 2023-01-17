/* function auto() {
  document.querySelector("video").addEventListener("click", () => {
    document.querySelector("video").play();
  });

  document.querySelector("video").click();
} */

var video = document.querySelector('video');
video.muted = true;
video.play()

video.muted = false;

//auto();
