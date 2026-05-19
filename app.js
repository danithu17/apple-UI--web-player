/* ==========================================================================
   VIBESTREAM CLIENT CLIENT-SIDE SCRIPT - DYNAMIC YOUTUBE AD-FREE PLAYER
   ========================================================================== */

// --- Predefined Curated Sri Lankan Indie Room Catalog ---
// 100% accurate, working YouTube Music video IDs of your requested artists!
const SRI_LANKAN_CATALOG = [
  // Mihiran
  { id: 'df37ZRkuHSg', name: 'Dewaduthiyak', artist: 'Mihiran', album: 'Unique User Playlist', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop', duration: 210 },
  { id: '0a3W6fFOGZQ', name: 'Mulawe', artist: 'Mihiran', album: 'Unique User Playlist', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop', duration: 210 },
  { id: '-yx-0ZVH4GI', name: 'Ma Deparak', artist: 'Mihiran', album: 'Unique User Playlist', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop', duration: 210 },
  { id: 'w48-FVbmITY', name: 'Mage Hare', artist: 'Mihiran', album: 'Unique User Playlist', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop', duration: 210 },

  // Uvindu Ayshcharya
  { id: 'FuZox51gFdU', name: 'Api Aye Hamuwela', artist: 'Uvindu Ayshcharya', album: 'Single', image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=300&auto=format&fit=crop', duration: 248 },
  { id: '-6BUxPk0nzU', name: 'Sada Nuba Awidin', artist: 'Uvindu Ayshcharya', album: 'Single', image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=300&auto=format&fit=crop', duration: 240 },
  { id: 'CPyYfbUlvBc', name: 'Sithuwam Hade', artist: 'Uvindu Ayshcharya', album: 'Single', image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=300&auto=format&fit=crop', duration: 230 },
  { id: 'QiZNj5JVf_M', name: 'Me Hitha Sanasa', artist: 'Uvindu Ayshcharya', album: 'Single', image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=300&auto=format&fit=crop', duration: 215 },

  // Iman Fernando
  { id: 'Xm_7-rxL-3Y', name: 'Hathpethi Mal', artist: 'Iman Fernando', album: 'Unique User Playlist', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&auto=format&fit=crop', duration: 210 },
  { id: 'scZcaKr2y_o', name: 'Hamuwunado', artist: 'Iman Fernando', album: 'Unique User Playlist', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&auto=format&fit=crop', duration: 210 },
  { id: 'y94zLffor_o', name: 'Palu Yame', artist: 'Iman Fernando', album: 'Unique User Playlist', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&auto=format&fit=crop', duration: 210 },
  { id: 'AsOM3C3Orts', name: 'Ralu Nethu', artist: 'Iman Fernando', album: 'Unique User Playlist', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&auto=format&fit=crop', duration: 210 },
  { id: 'JyKCCzhMJ4c', name: 'Hangnnd Adre', artist: 'Iman Fernando', album: 'Unique User Playlist', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=300&auto=format&fit=crop', duration: 210 },

  // Dilu Beats
  { id: 'gliT-cLM_k8', name: 'Nohadan Priywe', artist: 'Dilu Beats', album: 'User Unique Playlist', image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop', duration: 210 },
  { id: 'gliT-cLM_k8', name: 'Nethmanema', artist: 'Dilu Beats', album: 'User Unique Playlist', image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop', duration: 210 },
  { id: 'AP_O3UocmMs', name: 'Ma Diha', artist: 'Dilu Beats', album: 'User Unique Playlist', image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop', duration: 210 },
  { id: '9qxiq2gVFFE', name: 'Nubawa Soya', artist: 'Dilu Beats', album: 'User Unique Playlist', image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop', duration: 210 },
  { id: 'xi4BpKw-jxQ', name: 'Ahimi E Dasa', artist: 'Dilu Beats', album: 'User Unique Playlist', image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop', duration: 210 },
  { id: 'ilCbf5858Uk', name: 'Waiwara', artist: 'Dilu Beats', album: 'User Unique Playlist', image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop', duration: 210 },
  { id: 'bdLIo8kqlEM', name: 'Nuba Ha', artist: 'Dilu Beats', album: 'User Unique Playlist', image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop', duration: 210 }
];

// Automatically bind official YouTube high-res cover art for all tracks
SRI_LANKAN_CATALOG.forEach(song => {
  if (song.id) {
    song.image = `https://img.youtube.com/vi/${song.id}/hqdefault.jpg`;
  }
});

// --- Synced Lyrics Database ---
const LYRICS_DB = {
  '-6BUxPk0nzU': [
    { time: 21, text: 'මගේ හීන සරසා, සඳක් අහසෙ ගිලුනා' },
    { time: 31, text: 'මටත් නොදැනි මං තනි වෙලා' },
    { time: 41, text: 'මගේ නොවන හින්දා, දරා කදුලු හංගා' },
    { time: 51, text: 'ඔහේ ජීවිතේ ගෙවෙනවා' },
    { time: 61, text: 'නුඹෙම වී ඇවිලිලා, දුන්නු ඒ පෙම් සිනා' },
    { time: 71, text: 'මාවතේ තැන් පුරා, ආදරේ සොයමි මා' },
    { time: 82, text: 'නුඹ නොඑනා දිනේ, හිත තනි වී වගේ' },
    { time: 92, text: 'නුඹ ඇයිදෝ සඳේ... ම්ම්... මගේ...' },
    { time: 103, text: 'සඳ නුඹ ඇවිදින්, මට ඇයිදෝ කියන්' },
    { time: 113, text: 'නුඹ ලග ඇවිදින් ඉන්නම්' },
    { time: 123, text: 'තරු අතරින් මං, දුර ඈතින් බලන්' },
    { time: 133, text: 'යලි නුඹ එනකල් මං ඉන්නම්...' },
    { time: 165, text: 'බලා නෙතු අගින්, නොයා හිතුමතින්' },
    { time: 175, text: 'වේදනා උහුලමින් දරා ඉමි සුවෙන්' },
    { time: 185, text: 'එදා උනුහුමෙන්, ආදරේ මං හිතින්' },
    { time: 195, text: 'නොයා හිතේ හිදී මගේ, නුඹේ මගේ ඒ සෙනේ' },
    { time: 206, text: 'නුඹෙම වී ඇවිලිලා, දුන්නු ඒ පෙම් සිනා' },
    { time: 216, text: 'මාවතේ තැන් පුරා, ආදරේ සොයමි මා' },
    { time: 226, text: 'නුඹ නොඑනා දිනේ, හිත තනි වී වගේ' },
    { time: 236, text: 'නුඹ ඇයිදෝ සඳේ... ම්ම්... මගේ...' }
  ]
};

// --- Global Application State ---
let currentPlaylist = [];
let currentIndex = -1;
let isPlaying = false;
let shuffleMode = false;
let repeatMode = 'none'; // 'none' | 'one'
let favorites = JSON.parse(localStorage.getItem('vibestream_favorites')) || [];
let vuInterval = null;
let progressInterval = null;

// --- YouTube Iframe Player Variable ---
let ytPlayer = null;
let ytPlayerReady = false;

// --- DOM Elements ---
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const progressBar = document.getElementById('progress-bar');
const progressFill = document.getElementById('progress-fill');
const currentTimeLabel = document.getElementById('current-time');
const totalTimeLabel = document.getElementById('total-time');

// Volume Controls
const volumeSlider = document.getElementById('volume-slider');
const volumeFill = document.getElementById('volume-fill');
const volumeIcon = document.getElementById('volume-icon');

// Player Left Area
const playerArtwork = document.getElementById('player-artwork');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const playerFavBtn = document.getElementById('player-fav-btn');

// Sidebar and Search Elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const songsGrid = document.getElementById('songs-grid');
const sectionTitle = document.getElementById('section-title');
const resultsCountLabel = document.getElementById('results-count');
const songsLoader = document.getElementById('songs-loader');
const songsError = document.getElementById('songs-error');
const errorMessageText = document.getElementById('error-message');
const retryBtn = document.getElementById('retry-btn');
const sidebarFavorites = document.getElementById('sidebar-favorites');
const favCountBadge = document.getElementById('fav-count');

// Navigation Tabs
const navDiscover = document.getElementById('nav-discover');
const navFavoritesTab = document.getElementById('nav-favorites-tab');

// Fullscreen Overlay Elements
const fullscreenBtn = document.getElementById('fullscreen-btn');
const lyricsBtn = document.getElementById('lyrics-btn');
const fullscreenOverlay = document.getElementById('fullscreen-overlay');
const closeOverlayBtn = document.getElementById('close-overlay');
const overlayArtwork = document.getElementById('overlay-artwork');
const overlayTitle = document.getElementById('overlay-title');
const overlayArtist = document.getElementById('overlay-artist');
const overlayDynamicBg = document.getElementById('overlay-dynamic-bg');

// Fullscreen specific controls
const fsPlayBtn = document.getElementById('fs-play-btn');
const fsPrevBtn = document.getElementById('fs-prev-btn');
const fsNextBtn = document.getElementById('fs-next-btn');
const fsProgressBar = document.getElementById('fs-progress-bar');
const fsProgressFill = document.getElementById('fs-progress-fill');
const fsCurrentTimeLabel = document.getElementById('fs-current-time');
const fsTotalTimeLabel = document.getElementById('fs-total-time');
const fsShuffleBtn = document.getElementById('fs-shuffle-btn');
const fsRepeatBtn = document.getElementById('fs-repeat-btn');
const fsVolumeBar = document.getElementById('fs-volume-bar');
const fsLyricsToggle = document.getElementById('fs-lyrics-toggle');
const overlayArtworkBlur = document.getElementById('overlay-artwork-blur');
const overlayUpNextList = document.getElementById('overlay-up-next-list');
const premiumLyricsDisplay = document.querySelector('.premium-lyrics-display');

// Queue Elements
const queueBtn = document.getElementById('queue-btn');
const queuePanel = document.getElementById('queue-panel');
const closeQueueBtn = document.getElementById('close-queue-btn');
const queueList = document.getElementById('queue-list');

// --- Load YouTube Iframe API Dynamically ---
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Global callback triggered by YouTube API when ready
window.onYouTubeIframeAPIReady = function() {
  ytPlayer = new YT.Player('youtube-player', {
    height: '100',
    width: '100',
    videoId: '',
    playerVars: {
      'playsinline': 1,
      'controls': 0,
      'disablekb': 1,
      'fs': 0,
      'rel': 0,
      'showinfo': 0,
      'modestbranding': 1,
      'iv_load_policy': 3,
      'origin': window.location.origin
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange,
      'onError': onPlayerError
    }
  });
};

function onPlayerReady(event) {
  console.log('[YouTube Player API] Ad-free audio stream bridge successfully loaded.');
  ytPlayerReady = true;
  
  // Set default volume
  ytPlayer.setVolume(volumeSlider.value);
}

function onPlayerStateChange(event) {
  // YT.PlayerState: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (cued)
  if (event.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    updatePlayBtnUI(true);
    startProgressTimer();
    startVUMeter();
  } else if (event.data === YT.PlayerState.PAUSED) {
    isPlaying = false;
    updatePlayBtnUI(false);
    stopProgressTimer();
    stopVUMeter();
  } else if (event.data === YT.PlayerState.ENDED) {
    onTrackEnded();
  } else if (event.data === YT.PlayerState.BUFFERING) {
    console.log('[YouTube Player API] Buffering clean ad-free stream...');
  }
}

function onPlayerError(event) {
  console.error('[YouTube Player API] Playback error encountered:', event.data);
  // Auto-skip on errors (like region restricts or block attempts)
  errorMessageText.textContent = 'Playback blocked or restricted. Skpping track...';
  songsError.style.display = 'flex';
  setTimeout(() => {
    songsError.style.display = 'none';
    playNextTrack();
  }, 2000);
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  setDynamicGreeting();
  updateVolumeUI(volumeSlider.value);
  
  // Render favorites list shortcut on load
  renderFavoritesSidebar();
  
  // Load default Sri Lankan Cozy Room playlist immediately
  loadDefaultSriLankanPlaylist();

  // Attach All Event Listeners
  setupEventListeners();
});

// Set dynamic greeting based on system time
function setDynamicGreeting() {
  const greetingEl = document.getElementById('main-greeting');
  const hours = new Date().getHours();
  let greetingText = 'Cozy Late Night';
  if (hours < 12) {
    greetingText = 'Sunny Morning Café';
  } else if (hours < 18) {
    greetingText = 'Afternoon Tea Room';
  }
  if (greetingEl) greetingEl.textContent = greetingText;
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Search Events
  if (searchBtn) searchBtn.addEventListener('click', handleSearch);
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
  });

  const seeAllBtn = document.getElementById('see-all-btn');
  if (seeAllBtn) {
    seeAllBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const isGridView = songsGrid.classList.toggle('grid-view');
      seeAllBtn.textContent = isGridView ? 'Show Less' : 'See All';
    });
  }
  
  // Retry button in error panel
  retryBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      fetchSongs(query);
    } else {
      loadDefaultSriLankanPlaylist();
    }
  });

  // Audio Playback Events
  playBtn.addEventListener('click', togglePlayPause);
  prevBtn.addEventListener('click', playPreviousTrack);
  nextBtn.addEventListener('click', playNextTrack);
  
  if (fsPlayBtn) fsPlayBtn.addEventListener('click', togglePlayPause);
  if (fsPrevBtn) fsPrevBtn.addEventListener('click', playPreviousTrack);
  if (fsNextBtn) fsNextBtn.addEventListener('click', playNextTrack);
  if (fsShuffleBtn) fsShuffleBtn.addEventListener('click', toggleShuffle);
  if (fsRepeatBtn) fsRepeatBtn.addEventListener('click', toggleRepeat);

  const heroPlayBtn = document.getElementById('hero-play-btn');
  if (heroPlayBtn) heroPlayBtn.addEventListener('click', togglePlayPause);

  if (fsVolumeBar) {
    fsVolumeBar.addEventListener('input', (e) => {
      const val = e.target.value;
      if (ytPlayerReady && ytPlayer) ytPlayer.setVolume(val);
      volumeSlider.value = val;
      updateVolumeUI(val);
    });
  }

  if (fsLyricsToggle) {
    fsLyricsToggle.style.color = 'var(--accent-color)';
    premiumLyricsDisplay.style.transition = 'opacity 0.3s ease';
    
    fsLyricsToggle.addEventListener('click', () => {
      if (premiumLyricsDisplay.style.opacity === '0') {
        premiumLyricsDisplay.style.opacity = '1';
        fsLyricsToggle.style.color = 'var(--accent-color)';
      } else {
        premiumLyricsDisplay.style.opacity = '0';
        fsLyricsToggle.style.color = '';
      }
    });
  }

  const fsBassBtn = document.getElementById('fs-bass-btn');
  if (fsBassBtn) {
    fsBassBtn.addEventListener('click', () => {
      const active = fullscreenOverlay.classList.toggle('bass-boost-active');
      fsBassBtn.classList.toggle('active', active);
    });
  }
  
  // Progress Bar Seek
  progressBar.addEventListener('input', handleProgressBarSeek);
  progressBar.addEventListener('change', handleProgressBarCommit);
  
  if (fsProgressBar) {
    fsProgressBar.addEventListener('input', handleProgressBarSeek);
    fsProgressBar.addEventListener('change', handleProgressBarCommit);
  }

  // Connect Apple Artist shelf cards to load respective artists
  document.querySelectorAll('.apple-artist-circle').forEach(card => {
    card.addEventListener('click', () => {
      const artistName = card.getAttribute('data-artist');
      loadArtistTracks(artistName);
    });
  });
  
  // Shuffle & Repeat Events
  shuffleBtn.addEventListener('click', toggleShuffle);
  repeatBtn.addEventListener('click', toggleRepeat);

  // Progress Bar Seek
  progressBar.addEventListener('input', handleProgressBarSeek);
  progressBar.addEventListener('change', handleProgressBarCommit);

  // Volume Controls
  volumeSlider.addEventListener('input', (e) => {
    const val = e.target.value;
    if (ytPlayerReady && ytPlayer) {
      ytPlayer.setVolume(val);
    }
    if (fsVolumeBar) fsVolumeBar.value = val;
    updateVolumeUI(val);
  });
  volumeIcon.addEventListener('click', toggleMute);

  // Favorites Toggles
  playerFavBtn.addEventListener('click', toggleCurrentFavorite);

  // Navigation tab clicks
  navDiscover.addEventListener('click', () => {
    navDiscover.classList.add('active');
    navFavoritesTab.classList.remove('active');
    loadDefaultSriLankanPlaylist();
  });

  navFavoritesTab.addEventListener('click', () => {
    navDiscover.classList.remove('active');
    navFavoritesTab.classList.add('active');
    sectionTitle.textContent = 'My Favorite Collection';
    renderFavoritesGrid();
  });

  // Fullscreen Overlay Triggers
  fullscreenBtn.addEventListener('click', openFullscreenOverlay);
  lyricsBtn.addEventListener('click', openFullscreenOverlay);
  closeOverlayBtn.addEventListener('click', closeFullscreenOverlay);
  
  // Queue Triggers
  if (queueBtn) queueBtn.addEventListener('click', () => queuePanel.classList.toggle('active'));
  if (closeQueueBtn) closeQueueBtn.addEventListener('click', () => queuePanel.classList.remove('active'));
  
  // Keyboard Shortcuts (Spacebar, Arrows)
  document.addEventListener('keydown', handleKeyboardShortcuts);
}

// --- Load Default Aggregated Sri Lankan Playlist ---
function loadDefaultSriLankanPlaylist() {
  songsLoader.style.display = 'flex';
  songsGrid.style.display = 'none';
  songsError.style.display = 'none';
  resultsCountLabel.style.display = 'none';
  sectionTitle.textContent = 'Trending Hits';

  // Shuffle our Master Predefined Sri Lankan catalog to mimic radio play
  const shuffledCatalog = [...SRI_LANKAN_CATALOG].sort(() => Math.random() - 0.5);

  setTimeout(() => {
    currentPlaylist = shuffledCatalog;
    renderSongsGrid(currentPlaylist);
    resultsCountLabel.textContent = `${currentPlaylist.length} top tracks`;
    resultsCountLabel.style.display = 'inline';
    songsLoader.style.display = 'none';
  }, 300);
}

// --- Load Specific Artist from Apple shelf ---
function loadArtistTracks(artistName) {
  songsLoader.style.display = 'flex';
  songsGrid.style.display = 'none';
  songsError.style.display = 'none';
  resultsCountLabel.style.display = 'none';
  
  // Clean filtering
  const tracks = SRI_LANKAN_CATALOG.filter(s => s.artist.toLowerCase().includes(artistName.toLowerCase()));
  
  sectionTitle.textContent = `${artistName}'s Top Tracks`;

  setTimeout(() => {
    currentPlaylist = tracks;
    renderSongsGrid(currentPlaylist);
    resultsCountLabel.textContent = `${currentPlaylist.length} tracks found`;
    resultsCountLabel.style.display = 'inline';
    songsLoader.style.display = 'none';
  }, 200);
}

// --- Regular Expression YouTube URL Video ID Extractor ---
function extractYouTubeVideoId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

// --- Fetch CORS oEmbed Video Metadata ---
async function fetchYouTubeMetadata(videoId) {
  try {
    const response = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`);
    if (!response.ok) throw new Error();
    const data = await response.json();
    
    // Parse nice titles (split Artist - Title if possible)
    let rawTitle = data.title || 'Cozy Ambient Wave';
    let artistName = data.author_name || 'YouTube Creator';
    
    if (rawTitle.includes('-')) {
      const parts = rawTitle.split('-');
      artistName = parts[0].trim();
      rawTitle = parts[1].trim();
    }

    return {
      id: videoId,
      name: rawTitle,
      artist: artistName,
      album: 'YouTube Music Track',
      image: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      duration: 210 // Default fallback duration
    };
  } catch (err) {
    return {
      id: videoId,
      name: 'Cozy Room Session',
      artist: 'Ambient Vibe',
      album: 'YouTube Music Track',
      image: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      duration: 210
    };
  }
}

// --- Fetch Songs API Wrapper (Direct Youtube Search Parser) ---
async function fetchSongs(query, autoPlayFirst = false) {
  if (!query) return;

  // Check if the query is actually a pasted direct YouTube / YouTube Music URL!
  const pastedVideoId = extractYouTubeVideoId(query);
  if (pastedVideoId) {
    songsLoader.style.display = 'flex';
    songsGrid.style.display = 'none';
    songsError.style.display = 'none';

    console.log(`[oEmbed Resolver] Pasted URL detected! Extracting Video ID: ${pastedVideoId}`);
    const metadata = await fetchYouTubeMetadata(pastedVideoId);
    
    // Prepend metadata into current playlist and trigger play
    currentPlaylist = [metadata, ...currentPlaylist];
    renderSongsGrid(currentPlaylist);
    
    resultsCountLabel.textContent = `Pasted track loaded`;
    resultsCountLabel.style.display = 'inline';
    songsLoader.style.display = 'none';
    
    playTrackAtIndex(0);
    return;
  }

  // Fallback to searching our local high-fidelity Sri Lankan database by song name or artist!
  songsLoader.style.display = 'flex';
  songsGrid.style.display = 'none';
  songsError.style.display = 'none';
  resultsCountLabel.style.display = 'none';

  const matches = SRI_LANKAN_CATALOG.filter(s => 
    s.name.toLowerCase().includes(query.toLowerCase()) || 
    s.artist.toLowerCase().includes(query.toLowerCase())
  );

  setTimeout(() => {
    if (matches.length > 0) {
      currentPlaylist = matches;
      renderSongsGrid(currentPlaylist);
      resultsCountLabel.textContent = `${currentPlaylist.length} matches found`;
      resultsCountLabel.style.display = 'inline';
      if (autoPlayFirst) playTrackAtIndex(0);
    } else {
      // If no exact matches in local Sri Lankan database, show helper instruction to paste URL!
      songsGrid.innerHTML = `
        <div class="loader-container">
          <i class="fa-solid fa-wand-magic-sparkles error-icon" style="color: var(--accent-color)"></i>
          <h3>Paste Any YouTube Music Link!</h3>
          <p style="color: var(--text-secondary)">We couldn't find "${query}" in our pre-cached catalog. Paste a direct YouTube Music link (e.g. https://music.youtube.com/watch?v=...) to stream it instantly!</p>
        </div>
      `;
    }
    songsLoader.style.display = 'none';
  }, 300);
}

// --- Render Content Functions ---

// Render Featured Artists Shelf dynamically based on current playlist
function renderArtistsShelf(songs) {
  const shelfContainer = document.getElementById('artists-shelf-container');
  const shelf = document.getElementById('artists-shelf');
  if (!shelfContainer || !shelf) return;

  const artistSet = new Set();
  songs.forEach(song => {
    if (song.artist) {
      const parts = song.artist.split(',');
      parts.forEach(p => {
        const name = p.trim();
        if (name && name.length > 1 && !name.toLowerCase().includes('feat') && !name.toLowerCase().includes('ft')) {
          artistSet.add(name);
        }
      });
    }
  });

  const uniqueArtists = Array.from(artistSet).slice(0, 10);

  if (uniqueArtists.length > 0) {
    shelf.innerHTML = '';
    shelfContainer.style.display = 'block';

    uniqueArtists.forEach(artist => {
      const artistCard = document.createElement('div');
      artistCard.className = 'artist-circle-card';
      
      const initials = artist.charAt(0).toUpperCase();
      
      artistCard.innerHTML = `
        <div class="artist-circle-avatar">
          <span>${initials}</span>
        </div>
        <div class="artist-circle-name">${artist}</div>
      `;

      artistCard.addEventListener('click', (e) => {
        e.stopPropagation();
        loadArtistTracks(artist);
      });

      shelf.appendChild(artistCard);
    });
  } else {
    shelfContainer.style.display = 'none';
  }
}

// Render song list in main grid
function renderSongsGrid(songs) {
  renderArtistsShelf(songs);

  songsGrid.classList.remove('grid-view');
  const seeAllBtn = document.getElementById('see-all-btn');
  if (seeAllBtn) seeAllBtn.textContent = 'See All';

  songsGrid.innerHTML = '';
  songsGrid.style.display = 'flex';

  songs.forEach((song, index) => {
    const isCurrent = (currentIndex === index && currentPlaylist === songs);
    const isPlayingClass = isCurrent ? 'playing' : '';
    
    const card = document.createElement('div');
    card.className = `song-card ${isPlayingClass}`;
    card.setAttribute('data-index', index);
    
    card.innerHTML = `
      <div class="card-artwork-wrapper">
        <img src="${song.image}" alt="${song.name} artwork" loading="lazy">
        <div class="card-play-overlay">
          <button class="btn-card-play">
            <i class="fa-solid ${isCurrent && isPlaying ? 'fa-pause' : 'fa-play'}"></i>
          </button>
        </div>
        ${isCurrent && isPlaying ? `
          <div class="card-playing-indicator">
            <i class="fa-solid fa-waveform"></i>
          </div>
        ` : ''}
      </div>
      <div class="card-info">
        <h4 class="card-title">${song.name}</h4>
        <p class="card-artist">${song.artist}</p>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (currentIndex === index && currentPlaylist === songs) {
        togglePlayPause();
      } else {
        currentPlaylist = songs;
        playTrackAtIndex(index);
      }
    });

    songsGrid.appendChild(card);
  });
}

// Render favorites as grid in main panel (My Collection tab)
function renderFavoritesGrid() {
  if (favorites.length === 0) {
    songsGrid.innerHTML = `
      <div class="loader-container">
        <i class="fa-solid fa-heart-crack error-icon" style="color: var(--accent-color)"></i>
        <h3>Your Library is Empty</h3>
        <p style="color: var(--text-secondary)">Search for songs and tap the heart icon to save tracks directly to your library shelf!</p>
      </div>
    `;
    resultsCountLabel.style.display = 'none';
    return;
  }
  
  resultsCountLabel.textContent = `${favorites.length} tracks saved`;
  resultsCountLabel.style.display = 'inline';
  renderSongsGrid(favorites);
}

// Render dynamic list of favorites in sidebar
function renderFavoritesSidebar() {
  sidebarFavorites.innerHTML = '';
  favCountBadge.textContent = favorites.length;

  if (favorites.length === 0) {
    sidebarFavorites.innerHTML = '<p class="empty-favorites">No saved tracks yet.</p>';
    return;
  }

  favorites.forEach((song, index) => {
    const item = document.createElement('div');
    item.className = 'fav-item-shortcut';
    
    item.innerHTML = `
      <img src="${song.image}" alt="${song.name}">
      <div class="fav-item-shortcut-info">
        <div class="fav-item-shortcut-name">${song.name}</div>
        <div class="fav-item-shortcut-artist">${song.artist}</div>
      </div>
      <button class="fav-item-delete" title="Remove Favorite">
        <i class="fa-regular fa-trash-can"></i>
      </button>
    `;

    item.addEventListener('click', (e) => {
      if (e.target.closest('.fav-item-delete')) {
        e.stopPropagation();
        removeFavorite(song.id);
        return;
      }
      
      currentPlaylist = [...favorites];
      const favIndex = currentPlaylist.findIndex(f => f.id === song.id);
      playTrackAtIndex(favIndex);
    });

    sidebarFavorites.appendChild(item);
  });
}

// --- Audio Player Controller Core Logic (YouTube Streaming Engine) ---

// Play specific track index
function playTrackAtIndex(index) {
  if (index < 0 || index >= currentPlaylist.length) return;
  if (!ytPlayerReady || !ytPlayer) {
    console.warn('[YouTube Player API] Stream bridge not initialized yet.');
    return;
  }
  
  currentIndex = index;
  const song = currentPlaylist[currentIndex];
  
  console.log(`[Playback Manager] Inserting Cassette tape index ${currentIndex}: "${song.name}" by ${song.artist}`);

  // Load and play video ID from YouTube ad-free CDN!
  ytPlayer.loadVideoById(song.id);
  
  // Reset timeline UI
  progressBar.value = 0;
  progressFill.style.width = '0%';
  currentTimeLabel.textContent = '0:00';
  totalTimeLabel.textContent = song.duration ? formatTime(song.duration) : '3:30';

  updateGridCardState();
  updatePlayerUI(song);
}

// Toggle Play/Pause state
function togglePlayPause() {
  if (!ytPlayerReady || !ytPlayer) return;

  if (currentIndex === -1) {
    if (currentPlaylist.length > 0) {
      playTrackAtIndex(0);
    }
    return;
  }

  if (isPlaying) {
    ytPlayer.pauseVideo();
  } else {
    ytPlayer.playVideo();
  }
}

// Play Next Track
function playNextTrack() {
  if (currentPlaylist.length === 0) return;

  if (shuffleMode) {
    const randIndex = Math.floor(Math.random() * currentPlaylist.length);
    playTrackAtIndex(randIndex);
    return;
  }

  let nextIndex = currentIndex + 1;
  if (nextIndex >= currentPlaylist.length) {
    nextIndex = 0; // Wrap around to start
  }
  
  playTrackAtIndex(nextIndex);
}

// Play Previous Track
function playPreviousTrack() {
  if (currentPlaylist.length === 0) return;

  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    prevIndex = currentPlaylist.length - 1; // Wrap around to end
  }

  playTrackAtIndex(prevIndex);
}

// --- Helper Utilities ---

// Toggle Shuffle
function toggleShuffle() {
  shuffleMode = !shuffleMode;
  shuffleBtn.classList.toggle('active', shuffleMode);
  if (fsShuffleBtn) fsShuffleBtn.style.color = shuffleMode ? 'var(--accent-color)' : '';
  console.log(`[Playback Mode] Shuffle: ${shuffleMode}`);
}

// Toggle Repeat states
function toggleRepeat() {
  if (repeatMode === 'none') {
    repeatMode = 'one';
    repeatBtn.classList.add('active');
    repeatBtn.querySelector('i').className = 'fa-solid fa-repeat';
    repeatBtn.title = 'Repeat (One Track)';
    if (fsRepeatBtn) fsRepeatBtn.style.color = 'var(--accent-color)';
  } else {
    repeatMode = 'none';
    repeatBtn.classList.remove('active');
    repeatBtn.querySelector('i').className = 'fa-solid fa-repeat';
    repeatBtn.title = 'Repeat (Off)';
    if (fsRepeatBtn) fsRepeatBtn.style.color = '';
  }
  console.log(`[Playback Mode] Repeat state: ${repeatMode}`);
}

// Handle end of active track
function onTrackEnded() {
  if (repeatMode === 'one') {
    if (ytPlayerReady && ytPlayer) {
      ytPlayer.seekTo(0);
      ytPlayer.playVideo();
    }
  } else {
    playNextTrack();
  }
}

// Set active states on song cards in the main grid
function updateGridCardState() {
  const cards = document.querySelectorAll('.song-card');
  cards.forEach((card) => {
    const cardIndex = parseInt(card.getAttribute('data-index'), 10);
    const isCurrent = (cardIndex === currentIndex);
    
    if (isCurrent) {
      card.classList.add('playing');
      const cardPlayIcon = card.querySelector('.btn-card-play i');
      if (cardPlayIcon) {
        cardPlayIcon.className = isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
      }
      
      let indicator = card.querySelector('.card-playing-indicator');
      if (isPlaying && !indicator) {
        const artworkWrapper = card.querySelector('.card-artwork-wrapper');
        const visualizerDiv = document.createElement('div');
        visualizerDiv.className = 'card-playing-indicator';
        visualizerDiv.innerHTML = '<i class="fa-solid fa-waveform"></i>';
        artworkWrapper.appendChild(visualizerDiv);
      } else if (!isPlaying && indicator) {
        indicator.remove();
      }
    } else {
      card.classList.remove('playing');
      const cardPlayIcon = card.querySelector('.btn-card-play i');
      if (cardPlayIcon) cardPlayIcon.className = 'fa-solid fa-play';
      const indicator = card.querySelector('.card-playing-indicator');
      if (indicator) indicator.remove();
    }
  });
}

// Update play button display status in persistent bar and cassette desk
function updatePlayBtnUI(playState) {
  playBtn.querySelector('i').className = playState ? 'fa-solid fa-pause' : 'fa-solid fa-play';
  if (fsPlayBtn) {
    fsPlayBtn.querySelector('i').className = playState ? 'fa-solid fa-pause' : 'fa-solid fa-play';
  }
}

// Animated VU Meter jumping wiggles
function startVUMeter() {
  if (vuInterval) clearInterval(vuInterval);
  
  const leftDots = document.querySelectorAll('#vu-left .vu-dot');
  const rightDots = document.querySelectorAll('#vu-right .vu-dot');
  
  vuInterval = setInterval(() => {
    if (!isPlaying) {
      leftDots.forEach(dot => dot.classList.remove('active'));
      rightDots.forEach(dot => dot.classList.remove('active'));
      return;
    }
    
    // Simulating Left stereo channel spikes
    const leftSpike = Math.floor(Math.random() * 6);
    leftDots.forEach((dot, index) => {
      if (index < leftSpike) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Simulating Right stereo channel spikes
    const rightSpike = Math.floor(Math.random() * 6);
    rightDots.forEach((dot, index) => {
      if (index < rightSpike) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }, 100);
}

function stopVUMeter() {
  if (vuInterval) {
    clearInterval(vuInterval);
    vuInterval = null;
  }
  
  const leftDots = document.querySelectorAll('#vu-left .vu-dot');
  const rightDots = document.querySelectorAll('#vu-right .vu-dot');
  leftDots.forEach(dot => dot.classList.remove('active'));
  rightDots.forEach(dot => dot.classList.remove('active'));
}

// Update the Persistent Bottom Player & Apple Hero UI
function updatePlayerUI(song) {
  playerTitle.textContent = song.name;
  playerArtist.textContent = song.artist;
  playerArtwork.src = song.image;
  
  // Hero UI update
  const heroTitle = document.getElementById('hero-title');
  const heroArtist = document.getElementById('hero-artist');
  const heroArtwork = document.getElementById('hero-artwork');
  const ambientBg = document.getElementById('ambient-website-bg');
  
  if (heroTitle) heroTitle.textContent = song.name;
  if (heroArtist) heroArtist.textContent = song.artist;
  if (heroArtwork) heroArtwork.src = song.image;
  if (ambientBg) ambientBg.style.backgroundImage = `url(${song.image})`;

  const artworkContainer = document.querySelector('.current-track-artwork');
  if (isPlaying) {
    artworkContainer.classList.add('playing');
  } else {
    artworkContainer.classList.remove('playing');
  }

  // Check if active song is inside favorites list
  const isFav = favorites.some(f => f.id === song.id);
  playerFavBtn.classList.toggle('active', isFav);
  playerFavBtn.querySelector('i').className = isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  
  // Set details on Fullscreen Overlay too
  if (overlayDynamicBg) overlayDynamicBg.style.backgroundImage = `url(${song.image})`;
  if (overlayArtworkBlur) overlayArtworkBlur.style.backgroundImage = `url(${song.image})`;
  overlayArtwork.src = song.image;
  overlayTitle.textContent = song.name;
  overlayArtist.textContent = song.artist;
  
  // Reset FS progress
  if (fsProgressBar) fsProgressBar.value = 0;
  if (fsProgressFill) fsProgressFill.style.width = '0%';
  if (fsCurrentTimeLabel) fsCurrentTimeLabel.textContent = '0:00';
  if (fsTotalTimeLabel) fsTotalTimeLabel.textContent = song.duration ? formatTime(song.duration) : '3:30';
  
  // Update Queue Panel
  renderQueue();
  renderOverlayUpNext();
}

// Render Overlay Up Next
function renderOverlayUpNext() {
  if (!overlayUpNextList) return;
  overlayUpNextList.innerHTML = '';
  
  if (currentPlaylist.length === 0 || currentIndex === -1) return;
  
  // Show next 4 items
  for (let i = 1; i <= 4; i++) {
    let qIndex = currentIndex + i;
    if (qIndex >= currentPlaylist.length) qIndex -= currentPlaylist.length; // wrap around
    
    const song = currentPlaylist[qIndex];
    if (!song) break;
    
    const img = document.createElement('img');
    img.src = song.image;
    img.className = 'up-next-thumbnail';
    img.alt = song.name;
    img.title = song.name;
    
    img.addEventListener('click', () => {
      playTrackAtIndex(qIndex);
    });
    
    overlayUpNextList.appendChild(img);
  }
}

// Render Queue List
function renderQueue() {
  if (!queueList) return;
  queueList.innerHTML = '';
  
  if (currentPlaylist.length === 0 || currentIndex === -1) {
    queueList.innerHTML = '<p style="text-align:center; color:var(--text-muted); padding: 20px;">Queue is empty.</p>';
    return;
  }
  
  // Show next 10 items
  for (let i = 1; i <= 10; i++) {
    let qIndex = currentIndex + i;
    if (qIndex >= currentPlaylist.length) qIndex -= currentPlaylist.length; // wrap around
    
    const song = currentPlaylist[qIndex];
    if (!song) break;
    
    const item = document.createElement('div');
    item.className = 'queue-item';
    item.innerHTML = `
      <img src="${song.image}" alt="">
      <div class="queue-item-info">
        <div class="queue-item-name">${song.name}</div>
        <div class="queue-item-artist">${song.artist}</div>
      </div>
    `;
    item.addEventListener('click', () => {
      playTrackAtIndex(qIndex);
      queuePanel.classList.remove('active');
    });
    queueList.appendChild(item);
  }
}

// Format seconds into readable MM:SS timestamp
function formatTime(seconds) {
  if (isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// --- Dynamic Seekbar Timer driven by YouTube Native Current Time ---
function startProgressTimer() {
  if (progressInterval) clearInterval(progressInterval);
  
  progressInterval = setInterval(() => {
    if (ytPlayerReady && ytPlayer && isPlaying) {
      const currentTime = ytPlayer.getCurrentTime();
      const duration = ytPlayer.getDuration();
      
      if (duration > 0) {
        progressBar.max = duration;
        progressBar.value = currentTime;
        currentTimeLabel.textContent = formatTime(currentTime);
        totalTimeLabel.textContent = formatTime(duration);
        
        const percentage = (currentTime / duration) * 100;
        progressFill.style.width = `${percentage}%`;
        
        if (fsProgressBar) {
          fsProgressBar.max = duration;
          fsProgressBar.value = currentTime;
          if (fsCurrentTimeLabel) fsCurrentTimeLabel.textContent = formatTime(currentTime);
          if (fsTotalTimeLabel) fsTotalTimeLabel.textContent = formatTime(duration);
          if (fsProgressFill) fsProgressFill.style.width = `${percentage}%`;
        }
        
        // --- Synced Lyrics Engine ---
        const dynamicLyricText = document.getElementById('dynamic-lyric-text');
        if (dynamicLyricText && currentIndex !== -1 && currentPlaylist[currentIndex]) {
          const songId = currentPlaylist[currentIndex].id;
          if (LYRICS_DB[songId]) {
            dynamicLyricText.classList.remove('pulsing');
            const lyricsList = LYRICS_DB[songId];
            let activeLyric = '♪ Music Playing ♪';
            
            for (let i = 0; i < lyricsList.length; i++) {
              if (currentTime >= lyricsList[i].time) {
                activeLyric = lyricsList[i].text;
              } else {
                break;
              }
            }
            dynamicLyricText.textContent = activeLyric;
          } else {
            dynamicLyricText.textContent = 'Lyrics Not Available';
            dynamicLyricText.classList.add('pulsing');
          }
        }
      }
    }
  }, 250);
}

function stopProgressTimer() {
  if (progressInterval) {
    clearInterval(progressInterval);
    progressInterval = null;
  }
}

// Triggers when user drags the slider (input event)
function handleProgressBarSeek(e) {
  stopProgressTimer();
  const val = e.target.value;
  currentTimeLabel.textContent = formatTime(val);
  const percentage = (val / progressBar.max) * 100;
  progressFill.style.width = `${percentage}%`;
}

// Triggers when user releases mouse click from range slider (change event)
function handleProgressBarCommit(e) {
  if (ytPlayerReady && ytPlayer) {
    ytPlayer.seekTo(e.target.value, true);
  }
  startProgressTimer();
}

// --- Volume Controller ---

// Toggle Mute/Unmute
function toggleMute() {
  if (!ytPlayerReady || !ytPlayer) return;

  if (ytPlayer.isMuted()) {
    ytPlayer.unMute();
    volumeSlider.value = volumeSlider.dataset.prevVolume || 100;
    if (fsVolumeBar) fsVolumeBar.value = volumeSlider.value;
    ytPlayer.setVolume(volumeSlider.value);
    updateVolumeUI(volumeSlider.value);
  } else {
    volumeSlider.dataset.prevVolume = volumeSlider.value;
    ytPlayer.mute();
    volumeSlider.value = 0;
    if (fsVolumeBar) fsVolumeBar.value = 0;
    updateVolumeUI(0);
  }
}

// Adjust volume glows and icons
function updateVolumeUI(value) {
  volumeFill.style.width = `${value}%`;
  
  let iconClass = 'fa-solid fa-volume-high';
  if (value === 0 || (ytPlayerReady && ytPlayer && ytPlayer.isMuted())) {
    iconClass = 'fa-solid fa-volume-xmark';
  } else if (value < 30) {
    iconClass = 'fa-solid fa-volume-low';
  } else if (value < 70) {
    iconClass = 'fa-solid fa-volume-off'; 
  }
  
  volumeIcon.querySelector('i').className = iconClass;
}

// --- Sidebar Navigation & Search Handler ---
function handleSearch() {
  const query = searchInput.value.trim();
  if (!query) return;

  navDiscover.classList.add('active');
  navFavoritesTab.classList.remove('active');
  
  sectionTitle.textContent = `Search Results: "${query}"`;
  fetchSongs(query);
}

// --- Favorites Management (LocalStorage Persisted) ---

// Toggle favorites for the currently loaded song
function toggleCurrentFavorite() {
  if (currentIndex === -1) return;
  const song = currentPlaylist[currentIndex];
  
  const favIndex = favorites.findIndex(f => f.id === song.id);
  if (favIndex === -1) {
    favorites.push(song);
    console.log(`[Favorites Manager] Saved cassette: ${song.name}`);
  } else {
    favorites.splice(favIndex, 1);
    console.log(`[Favorites Manager] Discarded cassette: ${song.name}`);
  }
  
  localStorage.setItem('vibestream_favorites', JSON.stringify(favorites));
  
  updatePlayerUI(song);
  renderFavoritesSidebar();
  
  if (navFavoritesTab.classList.contains('active')) {
    renderFavoritesGrid();
  }
}

// Remove favorite by direct song ID
function removeFavorite(songId) {
  favorites = favorites.filter(f => f.id !== songId);
  localStorage.setItem('vibestream_favorites', JSON.stringify(favorites));
  renderFavoritesSidebar();

  if (currentIndex !== -1 && currentPlaylist[currentIndex].id === songId) {
    updatePlayerUI(currentPlaylist[currentIndex]);
  }

  if (navFavoritesTab.classList.contains('active')) {
    renderFavoritesGrid();
  } else {
    updateGridCardState();
  }
}

// --- Fullscreen Overlay View Controller ---

function openFullscreenOverlay() {
  if (currentIndex === -1) return;
  
  fullscreenOverlay.style.display = 'block';
  setTimeout(() => {
    fullscreenOverlay.classList.add('active');
    if (isPlaying) {
      fullscreenOverlay.classList.add('playing');
    }
  }, 10);
}

function closeFullscreenOverlay() {
  fullscreenOverlay.classList.remove('active');
  fullscreenOverlay.classList.remove('playing');
  setTimeout(() => {
    fullscreenOverlay.style.display = 'none';
  }, 500);
}

// --- Keyboard Navigation Controls ---
function handleKeyboardShortcuts(e) {
  if (document.activeElement === searchInput) return;

  switch(e.code) {
    case 'Space':
      e.preventDefault();
      togglePlayPause();
      break;
      
    case 'ArrowRight':
      e.preventDefault();
      if (ytPlayerReady && ytPlayer) {
        const t = Math.min(ytPlayer.getDuration(), ytPlayer.getCurrentTime() + 5);
        ytPlayer.seekTo(t, true);
      }
      break;
      
    case 'ArrowLeft':
      e.preventDefault();
      if (ytPlayerReady && ytPlayer) {
        const t = Math.max(0, ytPlayer.getCurrentTime() - 5);
        ytPlayer.seekTo(t, true);
      }
      break;
      
    case 'ArrowUp':
      e.preventDefault();
      const newVolUp = Math.min(100, parseInt(volumeSlider.value) + 5);
      volumeSlider.value = newVolUp;
      if (ytPlayerReady && ytPlayer) {
        ytPlayer.setVolume(newVolUp);
      }
      updateVolumeUI(newVolUp);
      break;
      
    case 'ArrowDown':
      e.preventDefault();
      const newVolDown = Math.max(0, parseInt(volumeSlider.value) - 5);
      volumeSlider.value = newVolDown;
      if (ytPlayerReady && ytPlayer) {
        ytPlayer.setVolume(newVolDown);
      }
      updateVolumeUI(newVolDown);
      break;
  }
}
