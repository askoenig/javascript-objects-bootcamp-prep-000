var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return Object;
}


function removeFromPlaylist(playlist, artistName){
  delete artistName.songTitle;
  return Object;
}
