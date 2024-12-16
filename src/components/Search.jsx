

import React from 'react'

const Search = () => {
  return (
    <div className='py-4 w-full flex justify-center px-4 md:px-8 lg:px-14 xl:px-24'>
        <div className='mx-1 my-4 w-full'>
            <input className='w-full px-8 py-4 rounded-md bg-gray-200' placeholder='Type a keyword...'></input>
        </div>
    </div>
  )
}

export default Search