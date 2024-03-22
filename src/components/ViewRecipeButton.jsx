import React from 'react'

const ViewRecipeButton = ({children}) => {
  return (
    <button className='py-4 px-6 bg-black text-white rounded-2xl shadow-2xl flex items-center gap-2 transition-all hover:bg-white  hover:text-black '>{children}</button>
  )
}

export default ViewRecipeButton
