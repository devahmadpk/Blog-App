

import React from 'react'
import HomeTopBar from '../components/HomeTopBar'
import Search from '../components/Search'
import LatestBlogs from '../components/LatestBlogs'
import SavedBlogs from '../components/SavedBlogs'
import LikedBlogs from '../components/LikedBlogs'
import BottomNav from '../components/BottomNav'
import ProfilePage from './ProfilePage'
import BlogPostPage from './BlogPostPage'
import CreateBlogPage from './CreateBlogPage'
import SearchPage from './SearchPage'
import SignInPage from './SignInPage'

const HomePage = () => {
  return (
    <div className='min-h-screen'>
        <HomeTopBar />
        <Search />
        <LatestBlogs />
        <SavedBlogs />
        <LikedBlogs />

        <BottomNav />
        
    </div>
  )
}

export default HomePage