

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBookmark } from '@fortawesome/free-regular-svg-icons'
import UserInterest from '../components/UserInterest'
import testImg from '../test-img.jpg'
import CommentsBox from '../components/CommentsBox'
import BottomNav from '../components/BottomNav'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { set } from 'date-fns'

const BlogPostPage = () => {

    const heartIcon = <FontAwesomeIcon icon={faHeart} />
    const bookmarkIcon = <FontAwesomeIcon icon={faBookmark} />

    const {id} = useParams();
    const [blogData, setBlogData] = useState(null);
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState('');
    const [userId, setUserId] = useState('');
    const [commentError, setCommentError] = useState('');

    useEffect(() => {
      
      const fetchBlogData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/selected-blogs/${id}`);
        if(response.status === 404) {
          setCommentError('Blog not found');
        }

        setBlogData(response.data);
      }
      catch(err) {
        console.error('Failed to fetch blog data:', err);
      }
    }

    const fetchUserComments = async () => {
      try{
        const response = await axios.get(`http://localhost:5000/comments/${id}`);
        if(response.status === 404) {
          setCommentError('No comments found');
        }

        setComments(response.data);
      }

      catch(err) {
        console.error('Failed to fetch user comments:', err);
      }
    }

      fetchBlogData();
      fetchUserComments();
      const usersId = localStorage.getItem('userId');
      setUserId(usersId);
      console.log(`User ID: ${userId}, Blog ID: ${id}, comment: ${commentInput}`);
    }, [id]);

    const insertComment = async () => {
      try {
        const response = await axios.post(`http://localhost:5000/comments`, {
          userId: userId,
          blogId: id,
          comment: commentInput
        });
        alert('Comment posted successfully');
        setCommentInput('');
        window.location.reload();
      }
      catch(err) {
        console.error('Failed to insert comment:', err);
      }
    }

    const saveBlog = async () => {
      try {
        const response = await axios.post(`http://localhost:5000/saved-blogs`, { 
          userId: userId,
          blogId: id
        });

        alert('Blog saved successfully'); 
      }

      catch(err) {
        console.error('Failed to save blog:', err);
      }
    }

    const likeBlog = async () => {
      try {
        const response = axios.post('http://localhost:5000/liked-blogs', {
          userId: userId,
          blogId: id
        })

        alert('Blog liked successfully');
      }

      catch(err) {
        console.error('Failed to like blog:', err);
      }

      console.log('clicked')
    }

  return (
    
    <div className='w-screen h-min-screen p-4 flex flex-col justify-start vsm:p-8 overflow-hidden'>
      {
        blogData ? (
        <>
        <div className='mt-10'>
          <h1 className='text-lg font-bold'>{blogData[0].title}</h1>
          <div>
              <UserInterest />
          </div>
          <div className='flex justify-end *:m-2 *:text-lg *:px-3 *:py-1 *:bg-[#E0F2FF] *:text-[#449BDA] *:rounded-md'>
              <button onClick={likeBlog}>{heartIcon}</button>
              <button onClick={saveBlog}>{bookmarkIcon}</button>
          </div>
      </div>

      <div className='w-full flex justify-center items-center flex-col mt-8 '>
          <div className=' w-full h-40 vsm:w-4/5 vsm:h-52 sm:w-2/3 md:h-[18rem] lg:h-[22rem] xl:h-[26rem] my-2'>
                  <img className='w-full h-full rounded-md' src={`http://localhost:5000/blogimages/${blogData[0].image_url}`}></img>
          </div>

          <div className='mt-4 sm:mt-12 sm:px-12 lg:px-16 xl:px-20 w-full'>
              <section className='text-start'>{blogData[0].content}</section>    
          </div>

      </div>
        </>) : (<h1>Loading...</h1>)
      }
        
        
        
        <div className='mt-8'>
            <h3 className='font-bold'>People commented:</h3>
            <div>
              {
                 
                 comments ? (comments.map((comment) => {
                  return <CommentsBox key={comment.comment_id} comment={comment} />
                })) : (<p>{commentError}</p>)
              }
              {
                console.log(`Comment Error: ${commentError}`)
              }

            </div>
        </div>
        <div className='mt-4 md:w-4/5'>
            <h3 className='font-bold'>Leave a comment:</h3>
            <textarea placeholder='Enter your comment...'
            className='mt-4 border-2 border-gray-300 w-full p-4 py-8 rounded-md'
            onChange= {(e) => setCommentInput(e.target.value)}>
            </textarea>
            <button className='bg-black py-2 px-8 rounded-md text-white w-full mt-2' onClick={insertComment}>Post</button>
        </div>

        <BottomNav />
    </div>
  )
}

export default BlogPostPage