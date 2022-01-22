import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Navbar() {
    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const fav = useSelector((state) =>
        state.count
    )
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fs-5">
            <div className="container-fluid">
                <Link className='navbar-brand fs-4 fw-bold' to="/">Movies</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ms-3">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link className="nav-link" to="favorits"><span>Favorites<span className="badge text-dark">{fav}</span>
                            </span></Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link className="nav-link" to="login">Login</Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link className="nav-link" to="register">Register</Link>
                        </li>
                    </ul>
                    <form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
                        <input className="form-control me-2" type="search" placeholder="Search" value={input} aria-label="Search" onInput={e => setInput(e.target.value)} required />
                        <Link className="btn btn-outline-success" type="button" to={`results/${input}`}>Search</Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;