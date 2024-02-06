import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const UpComing = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Upcoming in Cinema</h2>
      <div id="movies" class="movies"></div>
    </div>
    `;
  },
  async afterRender() {
    const upcoming = await TheMovieDbSource.upcomingMovies();
    const moviesContainer = document.querySelector('#movies');
    upcoming.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default UpComing;
