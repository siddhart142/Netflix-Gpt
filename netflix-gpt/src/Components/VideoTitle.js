import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold my-8'>{title}</h1>
      <p className='w-1/4 h-16 overflow-y-scroll no-scrollbar'>{overview}</p>
      <div>
        <button className='font-bold bg-white text-black p-2 px-8 w-30 rounded-md mr-2 my-2 hover:bg-opacity-80'> Play </button>
        <button className="bg-slate-600 text-white p-2 px-8 w-30 rounded-md ml-2 my-2 hover:bg-opacity-80  ">More Info</button>
      </div>
      
    </div>
  )
}

export default VideoTitle
