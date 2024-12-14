

import React from 'react'

const SignIn = () => {
  return (
    <div className='flex items-center justify-center flex-col h-screen  w-screen py-5'>
        <div className='vsm:px-20 px-8 w-screen sm:px-0 sm:flex sm:flex-col sm:items-center sm:justify-center'>
            <p className='text-3xl font-bold my-4'>Sign In</p>
            <p className='text-lg my-4'>Login to read your favorite blogs and share your thoughts with readers</p>
        </div>
        <div>
            <form className='*:my-2 *:py-3 *:px-10 *:rounded-md *:w-full 
            flex flex-col  justify-center my-4 w-screen vsm:px-20 px-8
            sm:items-center sm:p-0 sm:*:w-3/5 lg:*:w-1/2'>
                <input type='email' className='bg-[#E7E7E7]' placeholder='Enter email'></input>
                <input type='password' className='bg-[#E7E7E7]' placeholder='Enter password'></input>
                <button className='bg-black text-white py-3 '>Sign In</button>
            </form>
        </div>

    </div>
  )
}

export default SignIn