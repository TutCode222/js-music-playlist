let songs = [
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      duration: "3:20",
      liked: true,
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d6/87/41/d687410c-4714-af1d-e055-3296d4777226/mzaf_3899967882325561494.plus.aac.ep.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/6f/bc/e6/6fbce6c4-c38c-72d8-4fd0-66cfff32f679/20UMGIM12176.rgb.jpg/100x100bb.jpg",
    },
    {
      title: "Levitating",
      artist: "Dua Lipa",
      duration: "3:23",
      liked: false,
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/13/da/f4/13daf417-4af6-9c03-4bd7-ba42bb8c878e/mzaf_14497502351802974104.plus.aac.ep.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/16/9c/e6/169ce699-5506-0e08-f514-81f08a9ed7f5/190295132651.jpg/100x100bb.jpg",
    },
    {
      title: "Don't Start Now",
      artist: "Dua Lipa",
      duration: "3:03",
      liked: true,
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/01/55/e1/0155e17e-3b4e-734d-126d-7c68855334c4/mzaf_921296087409308691.plus.aac.ep.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/41/ee/66/41ee66fa-f8dd-7e82-155a-3a1b360dc562/190295322175.jpg/100x100bb.jpg",
    },
    {
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      duration: "2:54",
      liked: false,
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/16/86/f5/1686f50d-8b77-7e32-85f7-5f0e804d68fe/mzaf_1581096760438104595.plus.aac.ep.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/100x100bb.jpg",
    },
    {
      title: "Circles",
      artist: "Post Malone",
      duration: "3:35",
      liked: true,
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/78/fb/e6/78fbe613-9e1c-6a99-aa7d-fe8b1ec2a971/mzaf_12103026775056031014.plus.aac.ep.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/97/e6/11/97e6112a-c6bb-81d6-9364-373627df6a83/artwork.jpg/100x100bb.jpg",
    },
    {
      title: "Adore You",
      artist: "Harry Styles",
      duration: "3:27",
      liked: false,
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/1b/59/1f/1b591fec-7157-f069-02fd-46a77c8638af/mzaf_15227483119872129084.plus.aac.ep.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/2b/c4/c9/2bc4c9d4-3bc6-ab13-3f71-df0b89b173de/886448022213.jpg/100x100bb.jpg",
    },
    {
      title: "Savage Love",
      artist: "Jason Derulo",
      duration: "2:51",
      liked: true,
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/33/22/97/332297f2-4dec-4768-4763-df3b33c23e82/mzaf_17378892637379859434.plus.aac.ep.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/b8/6a/31/b86a31f3-56a3-9e69-7159-0a44cd3b6b6c/886448554769.jpg/100x100bb.jpg",
    },
    {
      title: "Rockstar",
      artist: "DaBaby feat. Roddy Ricch",
      duration: "3:01",
      liked: false,
      audio: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/1d/e9/82/1de9827e-fc29-f852-a51b-356d7144e31a/mzaf_14736250221907049031.plus.aac.ep.m4a",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/53/0e/d0/530ed031-316d-a32b-d603-c11af9ad235d/20UMGIM28169.rgb.jpg/100x100bb.jpg",
    },
  ];
  
  const playlistContainer = document.getElementById("playlist");
  
  songs.forEach(song => {
    const songDiv = document.createElement("div");
    songDiv.className = "song";
  
    const title = document.createElement("h3");
    title.textContent = song.title;
  
    const artist = document.createElement("p");
    artist.textContent = `Artist: ${song.artist}`;
  
    const duration = document.createElement("p");
    duration.textContent = `Duration: ${song.duration}`;
  
    const liked = document.createElement("p");
    if (song.liked) {
      liked.textContent = "⭐ Favorite";
    }
  
    songDiv.appendChild(title);
    songDiv.appendChild(artist);
    songDiv.appendChild(duration);
    if (song.liked) songDiv.appendChild(liked);
  
    playlistContainer.appendChild(songDiv);
  });