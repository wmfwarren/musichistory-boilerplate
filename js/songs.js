var songs = [];
var songDisplayRegion = document.getElementsByClassName("songDisplay");
var currentSong = null;

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

function purgeSpecialChars () {
	for (let i = 0; i < songs.length; i++) { //this loop iterates through the song strings
		currentSong = songs[i];

		for(let j = 0; j < currentSong.length; j++){ //this loop iterates through chars in songs
			let currentChar = currentSong[j];
			let currentCharCode = currentSong.charCodeAt(j); //current char unicode value

			if (currentChar === '>') {
				currentSong = currentSong.replace(currentChar, '-'); // replace the '>'
			}

			if (((currentCharCode <= 47 && currentCharCode >= 33) || currentCharCode === 64) && currentCharCode !== 45) { //if unicode value is a special char...
				currentSong = currentSong.replace(currentChar, ''); //...cut it out
			}
			songs[i] = currentSong;
		}
		//console.log("Song String ", i, ' ', currentSong);
	}
}

songs.forEach(purgeSpecialChars);

for (let i = 0; i < songs.length; i++) {
	var currentSongToPrint = songs[i];
	songDisplayRegion[0].innerHTML += `<p>${currentSongToPrint}</p>`;
}



