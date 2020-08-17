//API ENDPOINTS

const APIKEY = "6a99a0449164966ff862142970dfa90d";
// const API_READ_ACCESS =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTk5YTA0NDkxNjQ5NjZmZjg2MjE0Mjk3MGRmYTkwZCIsInN1YiI6IjVmMzcyZDNjMzk0YTg3MDAzMzhhMzVhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EzCgZ_Y1etpXXab85Vf9RAILwkAWn_kJIlSJcVv6PN4";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginials: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaies: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};
export default requests;
