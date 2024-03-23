import React from 'react'

const ViewRecipeButton = ({children}) => {
  return (
    <button className='lg:py-4 lg:px-6 py-2 px-4 bg-black text-white lg:rounded-2xl rounded-lg shadow-2xl flex items-center gap-2 transition-all hover:bg-white  hover:text-black '>{children}</button>
  )
}

export default ViewRecipeButton
