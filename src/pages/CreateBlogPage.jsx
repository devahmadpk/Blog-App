import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faImage, faLink, faFont, faCloudArrowUp, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import InterestBox from '../components/InterestBox'
import axios from 'axios'

const CreateBlogPage = () => {

  const fontIcon = <FontAwesomeIcon icon={faFont} />
  const bulletIcon = <FontAwesomeIcon icon={faList} />
  const imageIcon = <FontAwesomeIcon icon={faImage} />
  const linkIcon = <FontAwesomeIcon icon={faLink} />
  const uploadIcon = <FontAwesomeIcon icon={faCloudArrowUp} />
  const closeIcon = <FontAwesomeIcon icon={faXmark} />
  
  const navigate = useNavigate()
  const [userId, setUserId] = useState('') // State for the user ID
  const [title, setTitle] = useState('') // State for the blog title
  const [content, setContent] = useState('') // State for the blog content
  const [selectedImage, setSelectedImage] = useState(null) // State for the selected image

  useEffect(() => {
    const fetchUserId = localStorage.getItem('userId') // Get the user ID from local storage
    setUserId(fetchUserId) // Update the user ID state
  }, []);

  // Function to create a blog
  const createBlog = () => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('title', title);
    formData.append('blogImage', selectedImage);
    formData.append('content', content);

    if (!title ) {
      alert('Please enter blog title!');
      return;
    }

    if (!content ) {
      alert('Please enter blog content!');
      return;
    }

    if(!selectedImage){
      alert('Please select an image!');
      return;
    }

    console.log(`Inside create blog: ${selectedImage}`)

    try {
      axios.post('http://localhost:5000/create-blog', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then((response) => {
        alert('Blog created successfully');
        navigate('/home');
      });
    }

    catch (error) {
      console.error('Failed to create blog:', error);
      alert('Failed to create blog. Please try again.');
    }
  }

  // Handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0]
    setSelectedImage(file) // Update selected image state
  }

  return (
    <div className='h-screen w-screen p-4 flex flex-col'>
      <div>
        <button
          className='float-end text-red-500 text-2xl bg-gray-200 px-2'
          onClick={() => {
            navigate('/home')
          }}
        >
          {closeIcon}
        </button>
      </div>

      <div className='flex-grow flex flex-col items-center justify-center sm:px-10 lg:px-20'>
        <input
          placeholder='Enter a title for your blog'
          required
          className='w-full rounded-md mt-6 border-2 border-gray-200 px-4 p-2 sm:px-8 sm:py-4'
          onChange={(e) => setTitle(e.target.value)}
        />

        <div
          className='w-full h-20 vsm:h-28 md:h-36 lg:h-44 border-dashed border-blue-400 border-2 mt-4 rounded-md py-8
            flex justify-center items-center'
        >
          {selectedImage ? (
            <img src={selectedImage}></img>
          ) : ( 
            <div>
              <input
                type='file'
                accept='image/*'
                id='blogImageUpload'
                onChange={handleImageChange}
                className='hidden'
              />
              <label htmlFor='blogImageUpload' className='text-xl text-blue-400 cursor-pointer'>
                {uploadIcon} Upload
              </label>
            </div>
              
            )
          }
          
        </div>

        <div className='flex justify-start h-auto'>
          <InterestBox />
        </div>

        <textarea
          placeholder='Enter your blog content...'
          className='w-full flex-grow p-4  rounded-md mb-20 border-2 border-black'
          required
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      

      <div
        className='w-full p-4 bg-gray-200 mt-2 flex justify-between items-center rounded-md 
        fixed bottom-0 left-0 sm:px-12 lg:px-24'
      >
        <div className='*:text-xl *:mx-2 sm:*:mx-4'>
          <button>{fontIcon}</button>
          <button>{bulletIcon}</button>
          <button>{imageIcon}</button>
          <button>{linkIcon}</button>
        </div>
        <div>
          <button className='py-2 px-4 bg-black text-white rounded-md' onClick={createBlog}>Publish</button>
        </div>
      </div>
    </div>
  )
}

export default CreateBlogPage
