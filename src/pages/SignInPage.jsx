import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMessage('');
    setIsLoading(true);

    try {
      if (email.trim() !== '' && password.trim() !== '') {
        const response = await axios.post('http://localhost:5000/signin', { email, password_hash: password });
        console.log(response)

        if (response.status === 200) {
          const { userId, profileImage } = response.data;
          console.log(response.data)

          // Store userId and profileImage in LocalStorage
          localStorage.setItem('userId', userId);
          navigate('/home'); // Navigate to the home page
        }
      } else {
        setErrMessage('Please enter a valid email address and password.');
      }
    } catch (err) {
      console.error(err);
      setErrMessage('Invalid email address or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col h-screen w-screen py-5">
      <div className="vsm:px-20 px-8 w-screen sm:px-0 sm:flex sm:flex-col sm:items-center sm:justify-center">
        <p className="text-3xl font-bold my-4">Sign In</p>
        <p className="text-lg my-4 sm:text-center w-full sm:w-1/2">
          Login to read your favorite blogs and share your thoughts with readers
        </p>
      </div>
      <div>
        <form
          className="*:my-2 *:py-3 *:px-10 *:rounded-md *:w-full 
            flex flex-col justify-center my-4 w-screen vsm:px-20 px-8
            sm:items-center sm:p-0 sm:*:w-3/5 lg:*:w-1/2
            xl:*:w-2/5"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="bg-[#E7E7E7] p-3 rounded-md mb-4"
            placeholder="Enter email"
            aria-label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="bg-[#E7E7E7] p-3 rounded-md mb-4"
            placeholder="Enter password"
            aria-label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-black text-white py-3 rounded-md"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
          {errMessage && <p className="text-red-600 mt-2">{errMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
