import TheMovieDbSource from '../../data/themoviedb-source';
import UrlParses from '../../routes/url-parser';
import { createMovieDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
    `;
  },
  async afterRender() {
    const url = UrlParses.parseActiveUrlWithoutCombiner();
    const detail = await TheMovieDbSource.detailMovies(url.id);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createMovieDetailTemplate(detail);
  },
};

export default Detail;
