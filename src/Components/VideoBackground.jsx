import React from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = () => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  const addNowPlayingMovies = useSelector((store) => store.movies)
  // console.log(trailerVideo);
  const movieId = addNowPlayingMovies.nowPlayingMovies[0]?.id
  // console.log(trailerVideo?.key);
  
  useMovieTrailer(movieId); 

  return (
    <div>
      <iframe
          className='w-screen aspect-video'
          src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&playlist=" + trailerVideo?.key + "&loop=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export default VideoBackground;
