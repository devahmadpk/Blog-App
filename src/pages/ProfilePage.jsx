import React, { useEffect, useState, useRef } from 'react';
import BlogCard from '../components/BlogCard';
import BottomNav from '../components/BottomNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { set } from 'date-fns';

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState('');
  const [userName, setUsername] = useState('');
  const [userBlogsList, setUserBlogsList] = useState(null);
  const fileInputRef = useRef(null); // Ref for file input
  const cameraIcon = <FontAwesomeIcon icon={faCamera} />
  const [fetchingBlogs, setFetchingBlogs] = useState('');
  const [savedBlogs, setSavedBlogs] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId'); // Get user ID from localStorage
        if (!userId) {
          console.error('User ID not found. Redirecting to login...');
          return;
        }

        const response = await axios.get(`http://localhost:5000/user/${userId}`);
        const profileImg = response.data.profile_pic;
        const fetchedName = response.data.username;
        setUsername(fetchedName);
        const fullImagePath = `http://localhost:5000/uploads${profileImg}`;
        setProfileImage(fullImagePath);
      } catch (err) {
        console.error('Failed to fetch user data:', err);
        setProfileImage('path_to_default_image'); // Handle error by using a default image
      }
    };



    fetchUserData();
  }, []);

  const handleCameraClick = () => {
    fileInputRef.current.click(); // Trigger the file input dialog
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (!file) return;
  
    const formData = new FormData();
    formData.append('profileImage', file);
    const userId = localStorage.getItem('userId'); // Get user ID from local storage
    formData.append('userId', userId); // Include the userId in the formData
  
    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      const updatedImagePath = response.data.filePath;
      console.log(updatedImagePath)
      setProfileImage(`http://localhost:5000${updatedImagePath}`); // Update the profile image with the new path
      alert('Profile picture updated successfully');
      window.location.reload();
    } catch (err) {
      console.error('Failed to upload image:', err);
      alert('Failed to upload image. Please try again.');
    }
  };
  
  const fetchUserBlogs = async () => {

    const userId = localStorage.getItem('userId');
    try {
      const userBlogs = await axios.get(`http://localhost:5000/blogs/${userId}`);
      setUserBlogsList(userBlogs.data);
    }
    catch(err) {
      console.error('Failed to fetch user blogs:', err);
    }
    
    setFetchingBlogs('fetching');
  }

  const fetchSavedBlogs = async () => {
    const userId = localStorage.getItem('userId');
    try {
      const savedBlogs = await axios.get(`http://localhost:5000/saved-blogs/${userId}`);
      setSavedBlogs(savedBlogs.data);
      setFetchingBlogs('saved');
    }
    catch (err) {
      console.error('Failed to fetch saved blogs:', err);
    }
  }

  return (
    <div className='w-screen h-min-screen flex flex-col justify-center items-center'>
      <div className='py-4 px-10 mt-8 w-full flex justify-end'>
        <button className='px-2 py-1 vsm:px-4 vsm:py-2 bg-red-500 text-white rounded-md hover:bg-black'>Logout</button>
      </div>
      <div className='p-2 w-full flex justify-center items-center flex-col mt-14'>
        <div className='h-20 w-20 bg-gray-300 rounded-full my-4 relative group'>
          <img src={profileImage} className='w-full h-full rounded-full -z-10' alt='Profile' />
          
          <div
            className='w-full h-full rounded-full bg-[rgba(0,0,0,0.7)] absolute top-0 left-0 invisible
            group-hover:visible flex justify-center items-center text-3xl cursor-pointer'
            onClick={handleCameraClick} // Trigger file input on click
          >
            <span className='text-white'>{cameraIcon}</span>
          </div>
        </div>

        <p className='capitalize font-bold sm:text-lg'>{userName}</p>
      </div>

      <div className='h-full w-full p-4 px-4 md:px-8 lg:px-14 xl:px-24'>
        <div className='flex justify-center *:bg-black *:text-white *:rounded-full *:py-2 *:px-4 *:mx-4 sm:*:mx-8 sm:*:px-8 mt-10'>
          <button onClick={fetchUserBlogs}>Your blogs</button>
          <button onClick={fetchSavedBlogs}>Saved</button>
        </div>

        <div className='mt-8'>
        {
          fetchingBlogs === 'fetching' && userBlogsList ? (
            userBlogsList.map((blog) => (
              <BlogCard
                key={blog.blog_id}
                id={blog.blog_id}
                title={blog.title}
                image={blog.image_url}
                dateCreated={blog.created_at}
              />
            ))
          ) : fetchingBlogs === 'saved' && savedBlogs ? (
            savedBlogs.map((blog) => (
              <BlogCard
                key={blog.saved_blog_id}
                id={blog.saved_blog_id}
                title={blog.title}
                image={blog.image_url}
                dateCreated={blog.saved_at}
              />
            ))
          ) : (
            <div>No blogs to show</div>
          )
        }
        </div>
      </div>

      <BottomNav />

      <input
        type='file'
        ref={fileInputRef}
        className='display-none'
        accept='image/*'
        onChange={handleFileChange} // Handle file selection
      />
    </div>
  );
};

export default ProfilePage;
