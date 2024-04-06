let currentX = 0;
let currentY = 0;
let tgX = 0;
let tgY = 0;
let isPlaying = 0;

const playBtn = document.querySelector(".play-button");
const pauseBtn = document.querySelector(".pause-button");

const songs = [
	{
		path: "../assets/albums/Yoru-Magai.mp3",
		displayName: "Yoru Magai",
		artist: "YORUSHIKA",
	},
];

const music = new Audio();

music.src = "../assets/albums/Yoru-Magai.mp3";

function pauseMusic() {
	pauseBtn.style.opacity = "0";
	playBtn.style.opacity = "1";
	isPlaying = 0;

	music.pause();
}

function playMusic() {
	pauseBtn.style.opacity = "1";
	playBtn.style.opacity = "0";
	isPlaying = 1;

	music.play();
}

function togglePlay() {
	if (isPlaying) {
		pauseMusic();
	} else {
		playMusic();
	}
}

document.addEventListener("DOMContentLoaded", (e) => {
	const interactiveBubble = document.querySelector(".interactive");

	function move() {
		currentX += (tgX - currentX) / 20;
		currentY += (tgY - currentY) / 20;

		interactiveBubble.style.transform =
			"translate(" +
			Math.round(currentX) +
			"px, " +
			Math.round(currentY) +
			"px)";

		requestAnimationFrame((e) => {
			move();
		});
	}

	window.addEventListener("mousemove", (e) => {
		tgX = e.clientX;
		tgY = e.clientY;
		console.log(tgX);
	});

	move();

	music.addEventListener("ended", () => {
		console.log("woi");
		pauseMusic();
	});
});

let connectBtn = document.querySelector(".connect");

connectBtn.addEventListener("click", (e) => {
	console.log("jnck");
});
