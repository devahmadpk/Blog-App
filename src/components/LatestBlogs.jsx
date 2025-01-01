

import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import axios from 'axios'

const LatestBlogs = () => {

  const [allBlogs, setAllBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  useEffect(() => { 
    const fetchAllBlogs = async () => {
      const response = await axios.get('http://localhost:5000/all-blogs');
      setAllBlogs(response.data);
    }

    fetchAllBlogs();
  }, []);

  const handleMoreBlogs = () => {
    setVisibleBlogs((visibleBlogs) => visibleBlogs + 3);
  }


  return (
    <div className='flex flex-col px-4 md:px-8 lg:px-14 xl:px-24 -z-10'>
        <div className='w-full p-4 flex justify-between'>
            <h3 className='font-bold'>Latest</h3>
            <button className='font-bold' onClick={handleMoreBlogs}>View more</button>
        </div>

        <div>
          {
          allBlogs.slice(0, visibleBlogs).map((blog) => {
            return <BlogCard key={blog.blog_id} id={blog.blog_id} title={blog.title} image={blog.image_url} dateCreated={blog.created_at} />
          })
          }

        </div>

    </div>
  )
}

export default LatestBlogs