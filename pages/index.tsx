import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

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

const Home = ({ results }: { results: Movie[] }) => {
  return (
    <div className="">
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />

      <Results results={results} />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const gener = context.query.gener;
  if (gener) {
    //@ts-ignore
    const res = await fetch(requests[gener]?.url).then((res) => res.json());
    return { props: { results: res.results } };
  } else {
    const res = await fetch(`${requests.fetchTrending.url}`).then((res) =>
      res.json()
    );
    return { props: { results: res.results } };
  }
}

export default Home;
