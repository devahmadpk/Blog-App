

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faUser, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const BottomNav = () => {

    const navigate = useNavigate();
    const houseIcon = <FontAwesomeIcon icon={faHouse} />
    const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const createIcon = <FontAwesomeIcon icon={faPlus} />

  return (
    <div className='flex justify-evenly p-4 bg-black rounded-t-lg *:text-lg *:mx-4 *:text-white fixed bottom-0 left-0 w-full'>
        <button onClick={() => {navigate('/home')}}>{houseIcon}</button>
        <button onClick={() => {navigate('/search')}}>{searchIcon}</button>
        <button onClick={() => {navigate('/profile')}}>{userIcon}</button>
        <button onClick={() => {navigate('/create-blog')}}>{createIcon}</button>
    </div>
  )
}

export default BottomNav