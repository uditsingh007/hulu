const API_KEY = process.env.NEXT_PUBLIC_SECRET_API_KEY;
export const BASE_URL = "https://api.themoviedb.org/3";

interface IRequests {
  fetchTrending: {
    title: string;
    url: string;
  };
  fetchNetflixOriginals: {
    title: string;
    url: string;
  };
  fetchTopRated: {
    title: string;
    url: string;
  };
  fetchActionMovies: {
    title: string;
    url: string;
  };
  fetchComedyMovies: {
    title: string;
    url: string;
  };
  fetchHorrorMovies: {
    title: string;
    url: string;
  };
  fetchRomanceMovies: {
    title: string;
    url: string;
  };
  fetchDocumentaries: {
    title: string;
    url: string;
  };
}

const requests: IRequests = {
  fetchTrending: {
    title: "Trending",
    url: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchNetflixOriginals: {
    title: "Netflix Originals",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action Movies",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy Movies",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror Movies",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance Movies",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  },
  fetchDocumentaries: {
    title: "Documentaries",
    url: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
  },
};

export default requests;
