import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HomeTopBar = () => {
  const [profileImage, setProfileImage] = useState('');
  const [currentDateDay, setCurrentDateDay] = useState('');
  const navigate = useNavigate();

  // Function to navigate to the user's profile page
  const navigateProfile = () => {
    navigate('/profile');
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId'); // Get user ID from localStorage
        if (!userId) {
          console.error('User ID not found. Redirecting to login...');
          navigate('/signin'); // Redirect to login if no userId is found
          return;
        }
      
        const response = await axios.get(`http://localhost:5000/user/${userId}`);
        // Set the profile image URL returned by the backend
        const profileImg = response.data.profile_pic;
        // console.log(`ProfileImg: ${profileImg}`)
        const fullImagePath = `http://localhost:5000/uploads${profileImg}`
        setProfileImage(fullImagePath); // Set default image if no profile image
        // console.log(`FullImagePath: ${profileImage}`)
      } catch (err) {
        console.error('Failed to fetch user data:', err);
        setProfileImage('path_to_default_image'); // Handle error by using a default image
      }
    };

    const dateFetcher = () => {
      const d = new Date();
      const day = d.getDay();
      const date = d.getDate();
      const month = d.getMonth();
      const dayInWords = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const monthInWords = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      setCurrentDateDay(`${dayInWords[day]}, ${date} ${monthInWords[month]}`);
    }

    fetchUserData();
    dateFetcher();
  }, [navigate]); // Dependency array to rerun the effect if navigate changes
  
  return (
    <>
    <div className="flex p-4 justify-between px-4 md:px-8 lg:px-14 xl:px-24 relative">
      <div className="flex flex-col">
        <span className="text-xl font-bold">Blogs</span>
        <span className="my-1 text-gray-500">{currentDateDay}</span>
      </div>
      <div className="rounded-full h-14 w-14 sm:h-20 sm:w-20 bg-white">
        <img
          src={profileImage} 
          alt="Profile"
          className="w-full h-full rounded-full p-2"
          onClick={navigateProfile}
        />
      </div>
    </div>
    </>
    
  );
};

export default HomeTopBar;
