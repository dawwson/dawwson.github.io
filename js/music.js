tippy("#music-toggle-button", {
  content: "클릭하면 노래를 끄고 킬 수 있습니다!",
});

const audio = document.getElementById("music");
const musicToggleButton = document.querySelector("#music-toggle-button");

function handleRoadPage() {
  audio.play();
}

function handleClickSoundButton() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

document.addEventListener("DOMContentLoaded", handleRoadPage);
musicToggleButton.addEventListener("click", handleClickSoundButton);
