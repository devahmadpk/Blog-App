
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import './index.css'
import MainPage from './pages/MainPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import HomePage from './pages/HomePage';
import InterestsPage from './pages/InterestsPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='signin' element={<SignIn />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/interests' element={<InterestsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
