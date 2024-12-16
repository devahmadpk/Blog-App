

import React from 'react'

const SignUpPage = () => {
  return (
    <div className='flex items-center justify-center flex-col h-screen  w-screen py-5'>
        <div className='vsm:px-20 px-8 w-screen sm:px-0 sm:flex sm:flex-col sm:items-center sm:justify-center'>
            <p className='text-3xl font-bold my-4'>Sign Up</p>
            <p className='text-lg my-4'>Create an account to read thought provoking blogs</p>
        </div>
        <div>
            <form className='*:my-2 *:py-3 *:px-10 *:rounded-md *:w-full 
            flex flex-col  justify-center my-4 w-screen vsm:px-20 px-8
            sm:items-center sm:p-0 sm:*:w-3/5 lg:*:w-1/2
            xl:*:w-2/5'>
                <input type='text' className='bg-[#E7E7E7]' placeholder='Enter username'></input>
                <input type='email' className='bg-[#E7E7E7]' placeholder='Enter email'></input>
                <input type='password' className='bg-[#E7E7E7]' placeholder='Enter password'></input>
                <input type='password' className='bg-[#E7E7E7]' placeholder='Confirm password'></input>
                <button className='bg-black text-white py-3 '>Sign Up</button>
            </form>
        </div>

    </div>
  )
}

export default SignUpPage