window.addEventListener("DOMContentLoaded", function () {
  const buttonPlay = document.querySelector(".player-play");
  const buttonNext = document.querySelector(".player-next");
  const buttonPrev = document.querySelector(".player-prev");
  const playerRemaining = document.querySelector(".player-remaining");
  const playerDuration = document.querySelector(".player-duration");
  const playerImage = document.querySelector(".player-image");
  const progressBar = document.getElementById("progress-bar");
  const song = document.getElementById("song");
  let playing = true;

  song.addEventListener("ended", function () {
    changeListSong(999);
  });
  buttonPlay.addEventListener("click", handlePlayMusic);
  function handlePlayMusic() {
   
    if (playing) {
      song.play();
      playerImage.classList.add("is-playing");
      buttonPlay.classList.add("fa-pause");
      playing = false;
    } else {

      song.pause();
      playerImage.classList.remove("is-playing");
      buttonPlay.classList.remove("fa-pause");
      playing = true;
    }
  }

  function displayTimer() {
    const { duration, currentTime } = song;
    progressBar.max = duration;
    progressBar.value = currentTime;
    playerRemaining.textContent = formatTimer(currentTime);

    if (!duration) {
      playerDuration.textContent = `0:00`;
    } else {
      playerDuration.textContent = formatTimer(duration);
    }
  }
  function formatTimer(count) {
    const minutes = Math.floor(count / 60);
    const seconds = Math.floor(count - minutes * 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  }

  progressBar.addEventListener("change", function () {
    song.currentTime = this.value;
    
  });
  displayTimer();
  const timer = this.setInterval(() => {
    displayTimer();
  }, 500);
});
