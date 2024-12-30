

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment} from '@fortawesome/free-regular-svg-icons'
import testImg from '../test-img.jpg'
import UserInterest from './UserInterest'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const BlogCard = ({ title, image, content, dateCreated }) => {

    const heartIcon = <FontAwesomeIcon icon={faHeart} />
    const commentIcon = <FontAwesomeIcon icon={faComment} />

    const formatDate = (dateString) => {
        try {
          return formatDistanceToNow(new Date(dateString), { addSuffix: true });
        } catch (error) {
          console.error("Invalid date value:", dateString, error);
          return "Invalid date";
        }
      };

  return (
    <div className='flex flex-col p-4 my-4 mx-2 rounded-md bg-gray-100 border-2 border-gray-200'>
        <div className='flex vsm:justify-between vsm:items-center flex-col-reverse vsm:flex-row'>

            <div className='vsm:mr-8 py-4 vsm:p-0 md:mr-12'>
                <UserInterest />

                <div className='my-2'>
                    <span className='font-bold'>{title}</span>
                </div>
            </div>
            

            <div className='vsm:w-28 vsm:h-20 md:w-36 md:h-28 lg:w-44 shrink-0 w-full h-32'>
                <img className='w-full h-full rounded-md border-2 border-gray-200' src={`http://localhost:5000/blogimages/${image}`}></img>
            </div>
        </div>

        <div className='flex justify-between py-2 w-full *:text-gray-400 md:mt-4'>
                <span>{formatDate(dateCreated)}</span>
                <div className='*:mx-1'>
                    <button>{heartIcon}</button>
                    <span >10</span>
                    <button>{commentIcon}</button>
                    <span>10</span>
                </div>
             </div>
        
    </div>
  )
}

export default BlogCard