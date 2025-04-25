let songs = [/* full songs array from before */];

const playlistContainer = document.getElementById("playlist");

// Add a filter button
const filterButton = document.createElement("button");
filterButton.textContent = "Show Only Favorites";
filterButton.style.margin = "10px";
document.body.insertBefore(filterButton, playlistContainer);

let showOnlyFavorites = false;

function renderSongs() {
  playlistContainer.innerHTML = ""; // clear current songs

  songs
    .filter(song => !showOnlyFavorites || song.liked)
    .forEach((song, index) => {
      const songDiv = document.createElement("div");
      songDiv.className = "song";
      if (song.liked) songDiv.classList.add("liked");

      const img = document.createElement("img");
      img.src = song.image;
      img.alt = `${song.title} cover`;

      const title = document.createElement("h3");
      title.textContent = song.title;

      const artist = document.createElement("p");
      artist.textContent = `Artist: ${song.artist}`;

      const duration = document.createElement("p");
      duration.textContent = `Duration: ${song.duration}`;

      const likedText = document.createElement("p");
      likedText.textContent = song.liked ? "⭐ Favorite" : "";

      const audio = document.createElement("audio");
      audio.controls = true;
      audio.src = song.audio;

      const playCount = document.createElement("p");
      playCount.textContent = `Played: ${song.played || 0} times`;

      audio.addEventListener("play", () => {
        song.played = (song.played || 0) + 1;
        playCount.textContent = `Played: ${song.played} times`;
      });

      const heartButton = document.createElement("button");
      heartButton.innerHTML = song.liked ? "❤️" : "🤍";
      heartButton.style.cursor = "pointer";
      heartButton.addEventListener("click", () => {
        song.liked = !song.liked;
        renderSongs();
      });

      songDiv.appendChild(img);
      songDiv.appendChild(title);
      songDiv.appendChild(artist);
      songDiv.appendChild(duration);
      songDiv.appendChild(likedText);
      songDiv.appendChild(audio);
      songDiv.appendChild(playCount);
      songDiv.appendChild(heartButton);

      playlistContainer.appendChild(songDiv);
    });
}

filterButton.addEventListener("click", () => {
  showOnlyFavorites = !showOnlyFavorites;
  filterButton.textContent = showOnlyFavorites
    ? "Show All Songs"
    : "Show Only Favorites";
  renderSongs();
});

renderSongs();