import React from 'react'
import { useSelector } from 'react-redux';

const VideoTitle = ({title,overview}) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  const addNowPlayingMovies = useSelector((store) => store.movies)
  const movieId = addNowPlayingMovies.nowPlayingMovies[0]?.id
  
  return (
    <div className=' w-screen aspect-video pt-[28%]  md:pt-[15%] px-6 md:px-16 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <span className=' hidden md:inline-block py-4 md:text-lg mb-4 w-1/2 '>{overview}</span>
        <div className='my-2 md:-mt-8'>
            <a href={`https://www.youtube.com/watch?v=${trailerVideo?.key}`}><button className='bg-white text-black py-1 px-2 md:inline-block md:text-xl md:px-12 rounded-md md:rounded-lg hover:opacity-80 cursor-pointer' >▶  Play</button></a>
            <a href={`https://www.themoviedb.org/movie/${movieId}`}><button  className='bg-gray-500  text-white m-3 md:text-xl md:px-10 md:p-3 py-1 px-2 rounded-lg bg-opacity-50 cursor-pointer'>More info</button></a>
        </div>
    </div>
  )
}

export default VideoTitle