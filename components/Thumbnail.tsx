import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React, { FC } from "react";
import { Movie } from "../../typings";
import { BASE_URL } from "../utils/requests";

const Thumbnail = ({ result }: { result: Movie }) => {
  return (
    <div className="group p-2 cursor-pointer transition duration-200 ease-in sm:hover:scale-105 hover:z-50">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          result.backdrop_path || result.poster_path
        }`}
        layout="responsive"
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>

        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_title || result.name}
        </h2>

        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} •`}
          {result.release_date || result.first_air_date} •{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
