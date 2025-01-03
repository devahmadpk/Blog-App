import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const BottomNav = () => {
    const navigate = useNavigate();
    const houseIcon = <FontAwesomeIcon icon={faHouse} />;
    const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
    const userIcon = <FontAwesomeIcon icon={faUser} />;
    const createIcon = <FontAwesomeIcon icon={faPlus} />;

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            setIsVisible(false); // Hide when scrolling down
        } else {
            setIsVisible(true); // Show when scrolling up
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div
            className={`flex justify-evenly p-4 bg-black rounded-t-lg text-lg  text-white fixed bottom-0 left-0 w-full transition-transform duration-300 ${
                isVisible ? 'translate-y-0' : 'translate-y-full'
            }`}
        >
            <button onClick={() => navigate('/home')}>{houseIcon}</button>
            <button onClick={() => navigate('/search')}>{searchIcon}</button>
            <button onClick={() => navigate('/profile')}>{userIcon}</button>
            <button onClick={() => navigate('/create-blog')}>{createIcon}</button>
        </div>
    );
};

export default BottomNav;
