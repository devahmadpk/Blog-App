

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faUser, faPlus } from '@fortawesome/free-solid-svg-icons'

const BottomNav = () => {

    const houseIcon = <FontAwesomeIcon icon={faHouse} />
    const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const createIcon = <FontAwesomeIcon icon={faPlus} />

  return (
    <div className='flex justify-evenly p-4 bg-black rounded-t-lg *:text-lg *:mx-4 *:text-white'>
        <button>{houseIcon}</button>
        <button>{searchIcon}</button>
        <button>{userIcon}</button>
        <button>{createIcon}</button>
    </div>
  )
}

export default BottomNav