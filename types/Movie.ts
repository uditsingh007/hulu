export interface Movie {
  title: string;
  backdrop_path: string;
  media_type?: string;
  release_date?: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  video: boolean;
  original_title: string;
  name: string;
  first_air_date: string;
}
