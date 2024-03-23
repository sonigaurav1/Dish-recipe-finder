import React from 'react'
import Me from '../images/mine.webp'

const PostAuthor = () => {
  return (
    <div onClick={()=>{
      window.open("https://gauravsonidev.vercel.app/")
    }} className='flex items-center gap-2 cursor-pointer'>
      <div className='size-10 rounded-full overflow-hidden'>
        <img src={Me} alt="chef" />
      </div>
      <div className='leading-4'>
        <h5 className='font-medium text-md'>Gaurav Soni</h5>
        <p className='font-normal text-gray-600 text-sm'>22 March, 2024</p>
      </div>
    </div>
  )
}

export default PostAuthor
