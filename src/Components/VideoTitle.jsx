import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[35%]  md:pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <h1 className=' hidden md:inline-block p-6 text-lg my-3 w-1/4 '>{overview}</h1>

        <div className='my-2 md:m-0'>
            <button className='bg-white text-black md:text-xl px-12 p-3 rounded-lg hover:opacity-80'>▶  Play</button>
            <button  className=' hidden md:inline-block bg-gray-500  text-white m-3 text-xl px-10 p-3 rounded-lg bg-opacity-50'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle