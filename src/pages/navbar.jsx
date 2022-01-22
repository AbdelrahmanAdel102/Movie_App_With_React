import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ChangeLanguage from './changeLang';
import { langContext } from "./LanguageContext";



function Navbar() {
    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const { contextLang } = useContext(langContext);

    const fav = useSelector((state) =>
        state.count
    )
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fs-5">
            <div className="container-fluid">
                <Link className='navbar-brand fs-4 fw-bold' to="/">{contextLang === "en" ? "Movies" : "افلام"}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ms-3">
                            <Link className="nav-link active" aria-current="page" to="/">{contextLang === "en" ? "Home" : "الرئيسية"}</Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link className="nav-link" to="favorits"><span>{contextLang === "en" ? "Favorites" : "المفضلة"}<span className="badge text-dark">{fav}</span>
                            </span></Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link className="nav-link" to="login">{contextLang === "en" ? "Login" : "تسجيل الدخول"}</Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link className="nav-link" to="register">{contextLang === "en" ? "Register" : "تسجيل"}</Link>
                        </li>
                    </ul>
                    <div className='ms-2'><ChangeLanguage/></div>
                    <form className="d-flex ms-4" onSubmit={(e) => handleSubmit(e)}>
                        <input className="form-control me-2" type="search" placeholder="Search" value={input} aria-label="Search" onInput={e => setInput(e.target.value)} required />
                        <Link className="btn btn-outline-success" type="button" to={`results/${input}`}>{contextLang === "en" ? "Search" : "بحث"}</Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;