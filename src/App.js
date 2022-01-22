import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './pages/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import MovieDetailes from './pages/movieDetails';
import Results from './pages/results';
import LogIN from './pages/login';
import SignUp from './pages/signup';
import { connect } from "react-redux";
import Favorites from './pages/favorits';
import { langContext } from "./pages/LanguageContext";
import { useState } from 'react';

function App() {
  const [contextLang, setContextLang] = useState("en");
  return (
    <div className='app.css'>
      <div className="container-fulied">
        <langContext.Provider value={{ contextLang, setContextLang }}>
          <Router>
          <div className={contextLang === "ar" ? "text-end" : "text-start"} dir={contextLang === "ar" ? "rtl" : "ltr"}>
            <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<MovieDetailes />} />
                <Route path="/results/:input" element={<Results />} />
                <Route path="/favorits" element={<Favorites />} />
                <Route path="/login" element={<LogIN />} />
                <Route path="/register" element={<SignUp />} />
              </Routes>
            </div>
          </Router>
        </langContext.Provider>
      </div >
    </div >

  );
}


export default (App);
