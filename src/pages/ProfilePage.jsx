

import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import testImg from '../test-img.jpg'
import BottomNav from '../components/BottomNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const ProfilePage = () => {

    const [profileImage, setProfileImage] = useState('')
    const [userName, setUsername] = useState('')
    const cameraIcon = <FontAwesomeIcon icon={faCamera} />

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const userId = localStorage.getItem('userId'); // Get user ID from localStorage
            if (!userId) {
              console.error('User ID not found. Redirecting to login...');
              return;
            }
          
            const response = await axios.get(`http://localhost:5000/user/${userId}`);
            // console.log(response)
            // Set the profile image URL returned by the backend
            const profileImg = response.data.profile_pic;
            const fetchedName = response.data.username;
            setUsername(fetchedName)
            // console.log(`ProfileImg: ${profileImg}`)
            const fullImagePath = `http://localhost:5000/uploads${profileImg}`
            setProfileImage(fullImagePath); // Set default image if no profile image
            // console.log(`FullImagePath: ${profileImage}`)
          } catch (err) {
            console.error('Failed to fetch user data:', err);
            setProfileImage('path_to_default_image'); // Handle error by using a default image
          }
        };
    
        fetchUserData();
      }, []); // Dependency array to rerun the effect if navigate changes

  return (
    <div className='w-screen h-min-screen flex flex-col justify-center items-center'>
        <div className='py-4 px-10 mt-8 w-full flex justify-end'>
          <button className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-black'>Logout</button>
        </div>
        <div className='p-2 w-full flex justi fy-center items-center flex-col mt-14'>
            <div className='w-14 h-14 sm:h-20 sm:w-20 bg-gray-300 rounded-full my-4 relative group'>
                <img src={profileImage} className='w-full h-full rounded-full -z-10 p-2'></img>
                
                <div className='w-full h-full rounded-full bg-[rgba(0,0,0,0.7)] absolute top-0 left-0 invisible
                 group-hover:visible flex justify-center items-center text-3xl'>
                  <span className='text-white'>{cameraIcon}</span>
                 </div>
            </div>
            <p className='capitalize font-bold sm:text-lg'>{userName}</p>
        </div>

        <div className='h-full w-full p-4 px-4 md:px-8 lg:px-14 xl:px-24'>
            <div className='flex justify-center *:bg-black *:text-white *:rounded-full *:py-2 *:px-4 *:mx-4 sm:*:mx-8 sm:*:px-8 mt-10'>
                <button>Your blogs</button>
                <button>Saved</button>
            </div>

            <div className='mt-8'>
                <BlogCard />
            </div>
        </div>

        <BottomNav />
           
    </div>
  )
}

export default ProfilePage