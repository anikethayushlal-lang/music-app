# 🎵 MusicHub - Free Music Streaming App

A lightweight, fast, and ad-free music streaming app with a modern interface. Search, play, and enjoy your favorite music!

## ✨ Features

### Core Music Features
- 🔍 **Search** - Find songs and artists easily
- 🎵 **Play/Pause** - Control music playback
- ⏮ **Previous** & ⏭ **Next** - Navigate between songs
- 🔊 **Volume Control** - Adjust audio level
- 🔁 **Repeat Mode** - Loop single songs or playlists

### Content Sections
- 🎧 **Categories** - Browse by Pop, Rock, Hip-Hop, Jazz
- 📈 **Trending Now** - Discover popular songs
- 📋 **Popular Playlists** - Pre-made collections
- 🎬 **Music Videos** - Watch official MVs

### Smart Features
- 🎵 **Background Playback** - Music continues when you navigate
- 📱 **Mini Player** - Control from any page
- 💾 **State Persistence** - Player remembers songs
- 🎨 **Modern Design** - Dark theme with cyan accents
- ⚡ **Fast Loading** - No external dependencies
- 📱 **Responsive** - Works on all devices

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Open** `index.html` in your web browser
3. **Click** any song to play
4. **Enjoy!** Music plays in background as you navigate

## 📁 File Structure

```
music-app/
├── index.html      # Main app structure
├── style.css       # Modern styling & animations
├── script.js       # Player functionality
└── README.md       # Documentation
```

## 🎮 How to Use

### Playing Music
1. Click any song card to start playback
2. Use mini player at bottom for quick controls
3. Click mini player to open full player view

### Full Player Controls
- **Play/Pause** - Toggle playback
- **Previous/Next** - Navigate songs
- **Volume Slider** - Adjust volume
- **Repeat Button** - Toggle repeat mode
- **Progress Bar** - Seek to position

### Navigation
- Click **Home**, **Trending**, **Playlists**, **Videos** in navbar
- Music continues playing in background
- Mini player accessible from any page

## 🎨 Design Features

- **Dark Theme** - Easy on the eyes
- **Gradient Backgrounds** - Modern aesthetic
- **Smooth Animations** - Fluid user experience
- **Glass Morphism** - Frosted glass effects
- **Hover Effects** - Interactive feedback
- **Responsive Grid** - Adapts to all screen sizes

## 💻 Technologies

- **HTML5** - Semantic structure
- **CSS3** - Flexbox, Grid, Animations, Gradients
- **JavaScript** - Player logic & state management
- **SessionStorage** - Player state persistence

## 📱 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎵 Sample Songs

- Blinding Lights - The Weeknd
- Shape of You - Ed Sheeran
- Levitating - Dua Lipa
- Anti-Hero - Taylor Swift
- As It Was - Harry Styles
- Essence - Wizkid ft. Tems

## 🔧 Customization

### Add More Songs
Edit `script.js` and add to the songs array:
```javascript
const songs = [
    { name: 'Your Song', artist: 'Your Artist' },
    // ...
];
```

### Change Colors
Edit `style.css` gradient colors:
```css
background: linear-gradient(135deg, #your-color1, #your-color2);
```

## 📝 Notes

- This is a demo app with simulated playback
- No actual audio files are included
- Player state is saved using SessionStorage
- Music playback state persists across page navigation

## 🎯 Future Enhancements

- Real audio playback with actual MP3/audio files
- User authentication & playlists
- Backend integration with music APIs
- Download & offline playback
- Social sharing features
- Equalizer controls

## 📄 License

Free to use and modify. Enjoy! 🎉

---

**Made with ❤️ for music lovers**
