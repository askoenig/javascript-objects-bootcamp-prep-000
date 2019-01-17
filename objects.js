var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return obj;
}


function removeFromPlaylist(playlist, artistName){
  delete artistName.songTitle;
}
