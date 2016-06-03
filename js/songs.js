var importedSongs = null;
var requestSongData = new XMLHttpRequest();
var songPrintZone = document.getElementById("songDisplay");

function printSongInfo() {

	//console.log("function triggered");

	for(let i = 0; i < importedSongs.songs.length; i++){
		var currentSong = importedSongs.songs[i];

		//console.log("Are I can Print song NAU?!/!!1");

		songPrintZone.innerHTML += `
			<h2 class="songName">${currentSong.title}</h2>
			<ul>
				<li>${currentSong.album}</li>
				<li>${currentSong.artist}</li>
			</ul> 
		`;
	}
}

function readInputSongFile() {
	importedSongs = JSON.parse(this.responseText);
	//console.log("songs are", importedSongs);

	printSongInfo();
}

requestSongData.addEventListener("load", readInputSongFile);

requestSongData.open("GET", "../json/songs.json");
requestSongData.send();
