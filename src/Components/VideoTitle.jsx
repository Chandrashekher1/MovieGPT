import React from 'react'
import { useSelector } from 'react-redux';

const VideoTitle = ({title,overview}) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  const addNowPlayingMovies = useSelector((store) => store.movies)
  const movieId = addNowPlayingMovies.nowPlayingMovies[0]?.id
  
  return (
    <div className=' w-screen aspect-video pt-[35%]  md:pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <h1 className=' hidden md:inline-block p-6 text-lg my-3 w-1/4 '>{overview}</h1>
        <div className='my-2 md:-mt-8'>
            <a href={`https://www.youtube.com/watch?v=${trailerVideo?.key}`}><button className='bg-white text-black p-1  md:inline-block text-xl px-12 p-3 rounded-lg hover:opacity-80 cursor-pointer' >▶  Play</button></a>
            <a href={`https://www.themoviedb.org/movie/${movieId}`}><button  className=' hidden md:inline-block bg-gray-500  text-white m-3 text-xl px-10 p-3 rounded-lg bg-opacity-50 cursor-pointer'>More info</button></a>
        </div>
    </div>
  )
}

export default VideoTitle