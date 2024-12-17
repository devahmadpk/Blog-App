

import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setErrMessage('');
      if(email !== '' && password !== '')
      {
        const response = await axios.post('http://localhost:5000/signin', {email, password_hash: password})
        if(response.status === 200) {
          alert('Login successful')
          navigate('/home');
        }
      }

      else {
        setErrMessage('Invalid email address or password');
      }
    }

    catch(err) {
      console.log(err);
      setErrMessage('Invalid email address or password');
    }
  }

  return (
    <div className='flex items-center justify-center flex-col h-screen  w-screen py-5'>
        <div className='vsm:px-20 px-8 w-screen sm:px-0 sm:flex sm:flex-col sm:items-center sm:justify-center'>
            <p className='text-3xl font-bold my-4'>Sign In</p>
            <p className='text-lg my-4 sm:text-center w-full sm:w-1/2'>Login to read your favorite blogs and share your thoughts with readers</p>
        </div>
        <div>
            <form className='*:my-2 *:py-3 *:px-10 *:rounded-md *:w-full 
            flex flex-col  justify-center my-4 w-screen vsm:px-20 px-8
            sm:items-center sm:p-0 sm:*:w-3/5 lg:*:w-1/2
            xl:*:w-2/5'
            onSubmit={handleSubmit}>
                <input type='email' className='bg-[#E7E7E7]' placeholder='Enter email' onChange={e => setEmail(e.target.value)}></input>
                <input type='password' className='bg-[#E7E7E7]' placeholder='Enter password' onChange={e => setPassword(e.target.value)}></input>
                <button className='bg-black text-white py-3 '>Sign In</button>
            </form>
            <p className='w-full px-10 text-red-600'>{errMessage}</p>
        </div>

    </div>
  )
}

export default SignInPage;