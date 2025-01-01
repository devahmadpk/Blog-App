

import React, { useEffect } from 'react'

const Interests = ({interest, onClick, isSelected}) => {    

  return (
    <div className='cursor-pointer' onClick={onClick}>
        <button className={`rounded-full px-4 py-2 mx-2 my-1 inline-block text-sm 
        ${isSelected ? 'bg-black text-white' : 'bg-gray-200 text-black'} `}
        >{interest}</button>
    </div>
  )
}

export default Interests