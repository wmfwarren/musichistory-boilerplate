var addViewLink = document.getElementById("addMusic");
var listViewLink = document.getElementById("songList");

var addMusicContent = document.getElementById("addMusicInfo");
var listGenreContent = document.getElementById("songInfo");
var listSongContent = document.getElementById("songDisplay");

function hideAddMusic() {
	console.log("Hiding Music Addition Fields");
	addMusicContent.classList.toggle("hidden");
	listSongContent.classList.toggle("hidden");
	listGenreContent.classList.toggle("hidden");
}

function hideMusicInfo() {
	console.log("Hiding Music info");
	addMusicContent.classList.toggle("hidden");
	listSongContent.classList.toggle("hidden");
	listGenreContent.classList.toggle("hidden");

	listViewLink.addEventListener("click", hideAddMusic);
}

addViewLink.addEventListener("click", hideMusicInfo);
