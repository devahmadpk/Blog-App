
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import './index.css'
import MainPage from './pages/MainPage';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import BlogPostPage from './pages/BlogPostPage';
import CreateBlogPage from './pages/CreateBlogPage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/signup' element={<SignUpPage />}></Route>
        <Route path='signin' element={<SignInPage />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/blog' element={<BlogPostPage />}></Route>
        <Route path='/create-blog' element={<CreateBlogPage />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
        <Route path='/search' element={<SearchPage />}></Route>

      </Routes>
    </>
  );
}

export default App;
