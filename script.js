let currentSong = {
    name: 'No song',
    artist: 'Select a song',
    isPlaying: false,
    currentTime: 0,
    duration: 240,
    volume: 70,
    repeat: false
};

const audio = new Audio();
let playlist = [];

// Play song
function playSong(name, artist) {
    currentSong.name = name;
    currentSong.artist = artist;
    currentSong.isPlaying = true;
    currentSong.currentTime = 0;
    
    updatePlayer();
    updateMiniPlayer();
}

// Toggle play/pause
function togglePlay() {
    currentSong.isPlaying = !currentSong.isPlaying;
    updatePlayer();
    updateMiniPlayer();
}

// Next song
function nextSong() {
    const songs = ['Blinding Lights', 'Shape of You', 'Levitating', 'Anti-Hero'];
    const artists = ['The Weeknd', 'Ed Sheeran', 'Dua Lipa', 'Taylor Swift'];
    const currentIndex = songs.indexOf(currentSong.name);
    const nextIndex = (currentIndex + 1) % songs.length;
    
    playSong(songs[nextIndex], artists[nextIndex]);
}

// Previous song
function previousSong() {
    const songs = ['Blinding Lights', 'Shape of You', 'Levitating', 'Anti-Hero'];
    const artists = ['The Weeknd', 'Ed Sheeran', 'Dua Lipa', 'Taylor Swift'];
    const currentIndex = songs.indexOf(currentSong.name);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    
    playSong(songs[prevIndex], artists[prevIndex]);
}

// Change volume
function changeVolume(value) {
    currentSong.volume = value;
    audio.volume = value / 100;
    updatePlayer();
}

// Toggle repeat
function toggleRepeat() {
    currentSong.repeat = !currentSong.repeat;
    updatePlayer();
}

// Update full player
function updatePlayer() {
    const modal = document.getElementById('playerModal');
    document.getElementById('playerSongName').textContent = currentSong.name;
    document.getElementById('playerArtistName').textContent = currentSong.artist;
    
    const playBtn = document.querySelector('.play-btn');
    playBtn.textContent = currentSong.isPlaying ? '⏸' : '▶';
}

// Update mini player
function updateMiniPlayer() {
    document.getElementById('miniSongName').textContent = currentSong.name;
    document.getElementById('miniArtistName').textContent = currentSong.artist;
    
    const miniBtn = document.querySelector('.mini-controls .mini-btn');
    miniBtn.textContent = currentSong.isPlaying ? '⏸' : '▶';
}

// Close player
function closePlayer() {
    document.getElementById('playerModal').classList.remove('active');
}

// Open player on mini player click
document.addEventListener('DOMContentLoaded', function() {
    const miniPlayer = document.querySelector('.mini-player');
    miniPlayer.addEventListener('click', function() {
        if (currentSong.name !== 'No song') {
            document.getElementById('playerModal').classList.add('active');
        }
    });
});

// Background music continues - handled by persistent audio object
// Player state maintained across page navigation
window.addEventListener('beforeunload', function() {
    // Save player state to sessionStorage
    sessionStorage.setItem('playerState', JSON.stringify(currentSong));
});

// Restore player state
window.addEventListener('load', function() {
    const savedState = sessionStorage.getItem('playerState');
    if (savedState) {
        currentSong = JSON.parse(savedState);
        updateMiniPlayer();
    }
});

// Auto-play next song after completion
setInterval(function() {
    if (currentSong.isPlaying && currentSong.currentTime < currentSong.duration) {
        currentSong.currentTime += 1;
    } else if (currentSong.isPlaying && currentSong.currentTime >= currentSong.duration) {
        nextSong();
    }
}, 1000);
