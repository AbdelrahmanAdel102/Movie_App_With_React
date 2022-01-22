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

function App() {
  return (
    <div className='app.css'>
      <div className="container-fulied">

        {/* // <div className={this.props.theme === "dark" ? "text-right" : "text-left"}
      //   dir={this.props.theme === "dark" ? "rtl" : "ltr"}>
      //   <h1 className="text-info"> {this.props.theme} </h1> */}

        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<MovieDetailes />} />
            <Route path="/results/:input" element={<Results />} />
            <Route path="/favorits/" element={<Favorites />} />
            <Route path="/login" element={<LogIN />} />
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </Router>
      </div>
    </div>

  );
}
const mapStateToProps = (state) => {
  return {

    theme: state.theme
  }
}
export default (App);
