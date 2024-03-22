import React from 'react'

const GrayButton = ({children}) => {
  return (
    <span className='bg-gray-200 py-2 px-4  text-sm text-gray-700 rounded-3xl flex items-center gap-2'>{children}</span>
  )
}

export default GrayButton
