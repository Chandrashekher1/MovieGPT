import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  console.log(movies);

  return (
    movies.nowPlayingMovies && movies.PopularMovies && movies.topRatedMovies && movies.upComingMovies &&(
      <div className='bg-black'>
        <div className='mt-0 md:-mt-44 pl-4 md:pl-12 relative z-20'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.PopularMovies} />
          <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
          <MovieList title={"UpComing Movies"} movies={movies.upComingMovies} />
          
        </div>
      </div>
    )
  );
}

export default SecondaryContainer;
