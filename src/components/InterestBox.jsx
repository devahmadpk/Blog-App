

import React, { useEffect, useState } from 'react'
import Interests from './Interests'
import axios from 'axios';

const InterestBox = () => {

  const [interests, setInterests] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);

  useEffect(() => {

    const fetchInterests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/interests');
        setInterests(response.data);
      }
      catch (err) {
        console.error('Failed to fetch interests:', err);
    }
  }

  fetchInterests();
    
  }, []);

  const toggleInterest = (interest) => {
    setSelectedInterests((prevSelected) => {
      if(prevSelected.includes(interest)) {
        return prevSelected.filter((item) => item !== interest);
      }

      return [...prevSelected, interest];
    })
  }

  return (
    <div className='my-4 flex flex-wrap items-center '>
      {
        interests.length !== 0 && interests ? (
          interests.map((interest) => (
            <Interests key={interest.interest_id} interest={interest.name} onClick={() => toggleInterest(interest.name)} isSelected={selectedInterests.includes(interest.name)}/>
        ))
        ) : ( <p>No interests found </p>)
      }
    </div>
  )
}

export default InterestBox