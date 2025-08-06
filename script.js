const tracks = document.querySelectorAll(".track");
const audioPlayer = document.getElementById("player");

let currentTrackIndex = -1;

// Tocar uma faixa por índice
function playTrackAtIndex(index) {
if (index >= 0 && index < tracks.length) {
// Remove destaque de todas
tracks.forEach(t => t.classList.remove("playing"));

const track = tracks[index];
const title = track.querySelector(".title");
const src = track.getAttribute("data-src");

audioPlayer.src = src;
audioPlayer.play();

track.classList.add("playing");
currentTrackIndex = index;
}
}

// Clique na música
tracks.forEach((track, index) => {
const title = track.querySelector(".title");
title.addEventListener("click", (e) => {
e.preventDefault();
playTrackAtIndex(index);
});
});

// Quando a música terminar, tocar a próxima
audioPlayer.addEventListener("ended", () => {
const nextIndex = currentTrackIndex + 1;
if (nextIndex < tracks.length) {
playTrackAtIndex(nextIndex);
} else {
// Opcional: reiniciar do começo
// playTrackAtIndex(0);
currentTrackIndex = -1;
}
});

