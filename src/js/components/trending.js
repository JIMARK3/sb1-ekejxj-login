export function renderTrending(trendingAnime) {
    const grid = document.getElementById('trendingGrid');
    
    trendingAnime.forEach(anime => {
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.innerHTML = `
            <img src="${anime.coverImage}" alt="${anime.title}">
            <div class="anime-card-info">
                <h3>${anime.title}</h3>
                <p>${anime.genre.join(', ')}</p>
            </div>
        `;
        
        card.addEventListener('click', () => {
            playAnime(anime);
        });
        
        grid.appendChild(card);
    });
}

function playAnime(anime) {
    const playerSection = document.getElementById('player');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitle = document.getElementById('videoTitle');
    const videoDescription = document.getElementById('videoDescription');
    const episodeList = document.getElementById('episodeList');
    
    playerSection.classList.remove('hidden');
    videoPlayer.src = anime.episodes[0].videoUrl;
    videoTitle.textContent = anime.title;
    videoDescription.textContent = anime.description;
    
    // Render episode list
    episodeList.innerHTML = '';
    anime.episodes.forEach((episode, index) => {
        const episodeItem = document.createElement('div');
        episodeItem.className = 'episode-item';
        episodeItem.textContent = `Episode ${index + 1}`;
        episodeItem.addEventListener('click', () => {
            videoPlayer.src = episode.videoUrl;
            videoPlayer.play();
        });
        episodeList.appendChild(episodeItem);
    });
    
    playerSection.scrollIntoView({ behavior: 'smooth' });
}