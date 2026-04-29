let currentSong = {
    name: 'No song',
    artist: 'Select a song',
    isPlaying: false,
    currentTime: 0,
    duration: 180,
    volume: 70,
    repeat: false
};

const audio = new Audio();
audio.volume = 0.7;

// Play song
function playSong(name, artist) {
    currentSong.name = name;
    currentSong.artist = artist;
    currentSong.isPlaying = true;
    currentSong.currentTime = 0;
    
    updatePlayer();
    updateMiniPlayer();
    
    // Simulate audio playback
    startPlaybackSimulation();
}

// Toggle play/pause
function togglePlay() {
    currentSong.isPlaying = !currentSong.isPlaying;
    updatePlayer();
    updateMiniPlayer();
}

// Next song
function nextSong() {
    const songs = [
        { name: 'Blinding Lights', artist: 'The Weeknd' },
        { name: 'Shape of You', artist: 'Ed Sheeran' },
        { name: 'Levitating', artist: 'Dua Lipa' },
        { name: 'Anti-Hero', artist: 'Taylor Swift' },
        { name: 'As It Was', artist: 'Harry Styles' },
        { name: 'Essence', artist: 'Wizkid ft. Tems' }
    ];
    
    const currentIndex = songs.findIndex(s => s.name === currentSong.name);
    const nextIndex = (currentIndex + 1) % songs.length;
    
    playSong(songs[nextIndex].name, songs[nextIndex].artist);
}

// Previous song
function previousSong() {
    const songs = [
        { name: 'Blinding Lights', artist: 'The Weeknd' },
        { name: 'Shape of You', artist: 'Ed Sheeran' },
        { name: 'Levitating', artist: 'Dua Lipa' },
        { name: 'Anti-Hero', artist: 'Taylor Swift' },
        { name: 'As It Was', artist: 'Harry Styles' },
        { name: 'Essence', artist: 'Wizkid ft. Tems' }
    ];
    
    const currentIndex = songs.findIndex(s => s.name === currentSong.name);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
    
    playSong(songs[prevIndex].name, songs[prevIndex].artist);
}

// Change volume
function changeVolume(value) {
    currentSong.volume = value;
    audio.volume = value / 100;
    const volumeValue = document.getElementById('volumeValue');
    if (volumeValue) volumeValue.textContent = value + '%';
}

// Toggle repeat
function toggleRepeat() {
    currentSong.repeat = !currentSong.repeat;
    const repeatBtn = document.getElementById('repeatBtn');
    if (repeatBtn) {
        repeatBtn.classList.toggle('active', currentSong.repeat);
    }
}

// Seek to position
function seek(value) {
    currentSong.currentTime = (value / 100) * currentSong.duration;
    updateProgressBar();
}

// Update full player
function updatePlayer() {
    document.getElementById('playerSongName').textContent = currentSong.name;
    document.getElementById('playerArtistName').textContent = currentSong.artist;
    
    const playBtn = document.getElementById('playBtn');
    if (playBtn) playBtn.textContent = currentSong.isPlaying ? '⏸' : '▶';
}

// Update mini player
function updateMiniPlayer() {
    document.getElementById('miniSongName').textContent = currentSong.name;
    document.getElementById('miniArtistName').textContent = currentSong.artist;
    
    const miniPlayBtn = document.getElementById('miniPlayBtn');
    if (miniPlayBtn) miniPlayBtn.textContent = currentSong.isPlaying ? '⏸' : '▶';
}

// Update progress bar
function updateProgressBar() {
    const progress = document.querySelector('.progress');
    const currentTimeEl = document.getElementById('currentTime');
    
    if (progress) {
        const percent = (currentSong.currentTime / currentSong.duration) * 100;
        progress.value = percent;
    }
    
    if (currentTimeEl) {
        currentTimeEl.textContent = formatTime(currentSong.currentTime);
    }
}

// Format time
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Simulate playback
function startPlaybackSimulation() {
    const playbackInterval = setInterval(() => {
        if (currentSong.isPlaying && currentSong.currentTime < currentSong.duration) {
            currentSong.currentTime += 0.1;
            updateProgressBar();
        } else if (currentSong.isPlaying && currentSong.currentTime >= currentSong.duration) {
            if (currentSong.repeat) {
                currentSong.currentTime = 0;
            } else {
                nextSong();
            }
        } else {
            clearInterval(playbackInterval);
        }
    }, 100);
}

// Close player
function closePlayer() {
    document.getElementById('playerModal').classList.remove('active');
}

// Open full player
function openFullPlayer() {
    if (currentSong.name !== 'No song') {
        document.getElementById('playerModal').classList.add('active');
        updatePlayer();
    }
}

// Filter by category
function filterCategory(category) {
    alert('Showing songs in ' + category + ' category');
}

// Open playlist
function openPlaylist(playlistName) {
    alert('Opening ' + playlistName + ' playlist');
}

// Play video
function playVideo(videoName) {
    alert('Playing ' + videoName);
}

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('searchBox');
    if (searchBox) {
        searchBox.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            if (query.length > 0) {
                console.log('Searching for: ' + query);
            }
        });
    }
    
    // Load saved player state
    loadPlayerState();
    updateMiniPlayer();
});

// Save player state
function savePlayerState() {
    sessionStorage.setItem('playerState', JSON.stringify(currentSong));
}

// Load player state
function loadPlayerState() {
    const savedState = sessionStorage.getItem('playerState');
    if (savedState) {
        currentSong = JSON.parse(savedState);
    }
}

// Save state before page unload
window.addEventListener('beforeunload', function() {
    savePlayerState();
});

// Background playback - music continues
window.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden - keep playing
    } else {
        // Page is visible - continue from where it left off
        updateMiniPlayer();
        updatePlayer();
    }
});
