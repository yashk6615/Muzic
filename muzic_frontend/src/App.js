import './output.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginComponent from './routes/login';
import SignupComponent from './routes/signup';
import HomeComponent from './routes/home';
import { useCookies } from 'react-cookie';
import LoggedInHomeComponent from './routes/LoggedInHome';
import UploadSong from './routes/UploadSong';
import MyMusic from './routes/MyMusic';
import songContext from './contexts/songContext';
import SearchPage from './routes/SearchPage';

function App() {
   const [soundPlayed, setSoundPlayed] = useState(null);
   const [isPaused, setIsPaused] = useState(true);
  const [cookie, setCookie] = useCookies(['token']);
  const [currentSong, setCurrentSong] = useState(null);

  return (
    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        {cookie.token ? (
          <songContext.Provider value={{currentSong,setCurrentSong,soundPlayed,setSoundPlayed,isPaused,setIsPaused} }>
            <Routes>
              // logged in routes
              <Route path="/" element={<Hellocomponent />}></Route>
              <Route path="/home" element={<LoggedInHomeComponent />} />
              <Route path="/uploadsong" element={<UploadSong />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/mymusic" element={<MyMusic />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </songContext.Provider>
        ) : (
          <Routes>
            //logged out routes
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/login" element={<LoginComponent />}></Route>
            <Route path="/signup" element={<SignupComponent />}></Route>
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

const Hellocomponent = () => {
  return <div>This is component</div>;
};

export default App;
