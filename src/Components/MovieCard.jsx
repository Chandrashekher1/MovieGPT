import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath, overview }) => {
  if (!posterPath) return null;

  return (
    <div className="relative w-36 md:w-48 pr-4 cursor-pointer group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-2 text-center">
        <p className="text-white text-sm md:text-base font-medium leading-snug">
          {overview?.length > 100 ? overview.substring(0, 100) + '...' : overview}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
