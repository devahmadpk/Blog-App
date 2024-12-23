import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMessage('');

    try {
      // Validation checks
      if (userName.trim() && email.trim() && password.trim() && confirmPassword.trim()) {
        if (password === confirmPassword) {
          // Request to create user
          const response = await axios.post('http://localhost:5000/signup', {
            username: userName,
            email,
            password_hash: password,
          });

          if (response.status === 201) {
            alert('Account created successfully');
            navigate('/signin');
          }
        } else {
          setErrMessage('Passwords do not match. Please try again!');
        }
      } else {
        setErrMessage('Please fill out all fields with valid information.');
      }
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 409) {
        setErrMessage('User already exists.');
      } else {
        setErrMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center flex-col h-screen w-screen py-5">
      <div className="vsm:px-20 px-8 w-screen sm:px-0 sm:flex sm:flex-col sm:items-center sm:justify-center">
        <p className="text-3xl font-bold my-4">Sign Up</p>
        <p className="text-lg my-4">Create an account to read thought-provoking blogs</p>
      </div>
      <div>
        <form
          className="*:my-2 *:py-3 *:px-10 *:rounded-md *:w-full 
            flex flex-col justify-center my-4 w-screen vsm:px-20 px-8
            sm:items-center sm:p-0 sm:*:w-3/5 lg:*:w-1/2 xl:*:w-2/5"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="bg-[#E7E7E7] p-3 rounded-md mb-4"
            placeholder="Enter username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            className="bg-[#E7E7E7] p-3 rounded-md mb-4"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="bg-[#E7E7E7] p-3 rounded-md mb-4"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="bg-[#E7E7E7] p-3 rounded-md mb-4"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="bg-black text-white py-3 rounded-md" type="submit">
            Sign Up
          </button>
          <p>
            Already have an account?{' '}
            <Link to={'/signin'} className="font-bold">
              Login
            </Link>
          </p>
          {errMessage && <p className="text-red-600 mt-2">{errMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
