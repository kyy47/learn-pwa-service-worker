import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class TheMovieDbSource {
  static async nowPlayingMovies() {
    const { data: responseJson } = await axios.get(API_ENDPOINT.NOW_PLAYING);
    return responseJson.results;
  }

  static async upcomingMovies() {
    const { data: responseJson } = await axios.get(API_ENDPOINT.UPCOMING);
    return responseJson.results;
  }

  static async detailMovies(id) {
    const { data: responseJson } = await axios.get(API_ENDPOINT.DETAIL(id));
    return responseJson;
  }
}

export default TheMovieDbSource;
