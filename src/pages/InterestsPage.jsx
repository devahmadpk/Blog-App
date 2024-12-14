

import React from 'react'
import InterestBox from '../components/InterestBox'

const InterestsPage = () => {
  return (
    <div className='w-screen h-screen p-4 flex justify-center items-center flex-col'>
        <h3 className=''>Select topics that are of the most interest to you</h3>
        <div className='px-1 py-4 my-5 flex justify-center items-center flex-wrap  w-'>
            <InterestBox />
            <InterestBox />
            <InterestBox />
            <InterestBox />
            <InterestBox />

        </div>

        <button className='bg-black text-white my-4 py-3 px-20 rounded-md w-full vsm:w-auto'>Create my feed</button>
        
    </div>
  )
}

export default InterestsPage