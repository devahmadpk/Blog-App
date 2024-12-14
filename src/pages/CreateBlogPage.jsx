


import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faImage, faLink, faFont } from '@fortawesome/free-solid-svg-icons'

const CreateBlogPage = () => {

    const fontIcon = <FontAwesomeIcon icon= {faFont} />
    const bulletIcon = <FontAwesomeIcon icon= {faList} />
    const imageIcon = <FontAwesomeIcon icon={faImage} />
    const linkIcon = <FontAwesomeIcon icon={faLink} />


  return (
    <div className='h-screen w-screen p-4 flex flex-col'>

        {/* Im talking about this div here */}
        <div className='flex-grow flex flex-col'> 
            <input placeholder='Enter a title for your blog' required
            className='p-2 w-full rounded-md mt-12'>
            </input>

            <div className='w-full h-24 border-dashed border-blue-400 border-2 mt-4 rounded-md'>
                
                {/* <input type="file" accept="image/*" className='bg-green-300 flex'></input> */}
            </div>

            <textarea placeholder='Enter your blog content...'
            className='w-full flex-grow p-4 mt-4 rounded-md mb-20 border-2 border-black'>

            </textarea>
        </div>

        <div className='w-full p-4 bg-gray-200 mt-2 flex justify-between items-center rounded-md fixed bottom-0 left-0'>
            <div className='*:text-xl *:mx-2'>
                <button>{fontIcon}</button>
                <button>{bulletIcon}</button>
                <button>{imageIcon}</button>
                <button>{linkIcon}</button>
            </div>
            <div>
                <button className='py-2 px-4 bg-black text-white rounded-md'>Preview</button>
            </div>
        </div>
    </div>
  )
}

export default CreateBlogPage