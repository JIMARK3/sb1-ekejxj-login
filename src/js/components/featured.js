export function renderFeatured(featuredAnime) {
    const slider = document.getElementById('featuredSlider');
    
    featuredAnime.forEach(anime => {
        const item = document.createElement('div');
        item.className = 'featured-item';
        item.innerHTML = `
            <img src="${anime.coverImage}" alt="${anime.title}">
            <div class="featured-item-info">
                <h3>${anime.title}</h3>
                <p>${anime.description.substring(0, 100)}...</p>
            </div>
        `;
        
        item.addEventListener('click', () => {
            playAnime(anime);
        });
        
        slider.appendChild(item);
    });
}

function playAnime(anime) {
    const playerSection = document.getElementById('player');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoTitle = document.getElementById('videoTitle');
    const videoDescription = document.getElementById('videoDescription');
    
    playerSection.classList.remove('hidden');
    videoPlayer.src = anime.episodes[0].videoUrl;
    videoTitle.textContent = anime.title;
    videoDescription.textContent = anime.description;
    
    playerSection.scrollIntoView({ behavior: 'smooth' });
}