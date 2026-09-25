const API_KEY = "a46b0bc6cc524383901058909df298e5";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  //console.log(data);
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query,
    )}`,
  );
  const data = await response.json();
  //console.log(data);
  return data.results;
};
