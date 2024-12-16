

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBookmark } from '@fortawesome/free-regular-svg-icons'
import InterestBox from '../components/InterestBox'
import UserInterest from '../components/UserInterest'
import testImg from '../test-img.jpg'
import CommentsBox from '../components/CommentsBox'

const BlogPostPage = () => {

    const heartIcon = <FontAwesomeIcon icon={faHeart} />
    const bookmarkIcon = <FontAwesomeIcon icon={faBookmark} />

  return (
    <div className='w-screen h-min-screen p-4 flex flex-col justify-start vsm:p-8 overflow-hidden'>
        <div className='mt-10'>
            <h1 className='text-lg font-bold'>Generative AI taking everything by storm</h1>
            <div>
                <UserInterest />
            </div>
            <div className='flex justify-end *:m-2 *:text-lg *:px-3 *:py-1 *:bg-[#E0F2FF] *:text-[#449BDA] *:rounded-md'>
                <button>{heartIcon}</button>
                <button>{bookmarkIcon}</button>
            </div>
        </div>

        <div className='w-full flex justify-center items-center flex-col mt-8 '>
            <div className=' w-full h-40 vsm:w-4/5 vsm:h-52 sm:w-2/3 md:h-[18rem] lg:h-[22rem] xl:h-[26rem] my-2'>
                    <img className='w-full h-full rounded-md' src={testImg}></img>
            </div>

            <div className='mt-4 sm:mt-12 sm:px-12 lg:px-16 xl:px-20'>
                <section>
                    <p>
                      <strong>Minimalism</strong> is not just a design choice; it’s a lifestyle. By focusing on what truly matters, 
                      we can create a more <em>purposeful</em> existence. The essence of minimalist living lies in 
                      decluttering both physical and mental spaces.
                    </p>
                </section>
                <section>
                  <h2>Why Choose Minimalism?</h2>
                  <p>
                    Adopting a minimalist lifestyle can lead to a <mark>stress-free</mark> environment, better mental clarity, and more 
                    financial freedom. Imagine having fewer distractions and focusing on experiences rather than material possessions.
                  </p>
                </section>
                <section>
                  <h2>How to Start?</h2>
                  <ol>
                    <li>Identify the essentials in your life.</li>
                    <li>Declutter your home one room at a time.</li>
                    <li>Practice gratitude for what you already have.</li>
                  </ol>
                </section>
            </div>

        </div>
        
        
        <div className='mt-8'>
            <h3 className='font-bold'>People commented:</h3>
            <div>
                <CommentsBox />
                <CommentsBox />
                <CommentsBox />
                <CommentsBox />

            </div>
        </div>
        <div className='mt-4 md:w-4/5'>
            <h3 className='font-bold'>Leave a comment:</h3>
            <textarea placeholder='Enter your comment...'
            className='mt-4 border-2 border-gray-300 w-full p-4 py-8 rounded-md'>
            </textarea>
            <button className='bg-black py-2 px-8 rounded-md text-white w-full mt-2'>Post</button>
        </div>
    </div>
  )
}

export default BlogPostPage