var songs = [];

inputSongName = document.getElementById("songName"); 
inputAlbumName = document.getElementById("albumName"); 
inputArtistName = document.getElementById("artistName");

addButton = document.getElementById("submitSongInfo");

displayZone = document.getElementById("songDisplay"); 

function addSongData(){
	console.log("Adding Data Function Triggered");	

	var songInfo = {
		title: "Doll Parts",
		album: "Live Through This",
		artist: "Hole"
	}

	songInfo.title = inputSongName.value;
	songInfo.album = inputAlbumName.value;
	songInfo.artist = inputArtistName.value;

	displayZone.innerHTML += `
		<h2 class="songName">${songInfo.title}</h2>
			<ul>
				<li>${songInfo.album}</li>
				<li>${songInfo.artist}</li>
			</ul> 
	`
	songs.push(songInfo);

	inputSongName.value = '';
	inputAlbumName.value = '';
	inputArtistName.value = '';
	
	inputSongName.focus();
}

addButton.addEventListener("click", addSongData);