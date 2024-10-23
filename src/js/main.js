import { renderFeatured } from './components/featured.js';
import { renderTrending } from './components/trending.js';
import { initializePlayer } from './components/player.js';
import { initializeSearch } from './components/search.js';
import { animeData } from './data/anime.js';

document.addEventListener('DOMContentLoaded', () => {
    renderFeatured(animeData.featured);
    renderTrending(animeData.trending);
    initializePlayer();
    initializeSearch();
});