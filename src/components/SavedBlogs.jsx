
import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import axios from 'axios';

const SavedBlogs = () => {
  const [savedBlogs, setSavedBlogs] = useState([]);

  useEffect(() => {
    const fetchSavedBlogs = async () => {
      const userId = localStorage.getItem('userId');
      try {
        const response = await axios.get(`http://localhost:5000/saved-blogs/${userId}`);
        setSavedBlogs(response.data);
      }
      catch (err) {
        console.error('Failed to fetch saved blogs:', err);
      }
    }

    fetchSavedBlogs();
  }, []);


  return (
    <div className='flex flex-col px-4 md:px-8 lg:px-14 xl:px-24'>
        <div className='w-full p-4 flex justify-between'>
            <h3 className='font-bold'>Saved</h3>
            <button className='font-bold'>View more</button>
        </div>

        <div>
        {
          savedBlogs != null && savedBlogs ? (
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
            <p>No saved blogs</p>
          )
        
        }
        </div>

    </div>
  )
}

export default SavedBlogs