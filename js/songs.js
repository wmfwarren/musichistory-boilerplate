var importedSongs = null;
var moreImportedSongs = null;
var requestSongData = new XMLHttpRequest();
var requestMoreSongData = new XMLHttpRequest();
var songPrintZone = document.getElementById("songDisplay");
var moreButton = document.getElementById("moreButton");

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

function addMoreSongInfo() {
	for(let i = 0; i < moreImportedSongs.songs.length; i++){
		var currentSong = moreImportedSongs.songs[i];

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
	importedSongs = JSON.parse(requestSongData.responseText);
	moreImportedSongs = JSON.parse(requestMoreSongData.responseText);
	console.log("songs are", moreImportedSongs);

	printSongInfo();
}

requestSongData.addEventListener("load", readInputSongFile);
requestMoreSongData.addEventListener("load", readInputSongFile);
moreButton.addEventListener("click", addMoreSongInfo);

requestSongData.open("GET", "../json/songs.json");
requestMoreSongData.open("GET", "../json/songs2.json");
requestSongData.send();
requestMoreSongData.send();
