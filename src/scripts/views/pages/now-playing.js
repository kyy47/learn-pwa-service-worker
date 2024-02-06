import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const NowPLaying = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Now Playing in Cinema</h2>
        <div id="movies" class="movies"></div>
      </div>
    `;
  },
  async afterRender() {
    const nowPlaying = await TheMovieDbSource.nowPlayingMovies();
    const moviesContainer = document.querySelector('#movies');
    nowPlaying.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default NowPLaying;
