export function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterAnime(searchTerm);
    });
}

function filterAnime(searchTerm) {
    const featuredItems = document.querySelectorAll('.featured-item');
    const animeCards = document.querySelectorAll('.anime-card');
    
    [...featuredItems, ...animeCards].forEach(item => {
        const title = item.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}