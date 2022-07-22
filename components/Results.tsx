import React from "react";
import Thumbnail from "./Thumbnail";
import { Movie } from "../../typings";

const Results = ({ results }: { results: Movie[] }) => {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
