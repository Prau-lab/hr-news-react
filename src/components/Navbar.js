import React from 'react'
import "../css/navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            {/* Logo Section Start */}
            <section className="d-flex justify-content-between">
                <div className="logo">
                    <img src="../Images/new.png" alt="image not found" />
                </div>
                <div className="d-flex align-items-center logo-banner-image">
                    <img src="../Images/MicrosoftTeams-image-32.png" alt="" />
                </div>
            </section>
            {/* Logo Section End */}

            {/* Naviagtion section start */}
            <nav className="navbar navbar-expand-lg menu-bar mt-4">
                <div className="container-fluid" style={{backgroundColor: "#DD2028"}} >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">HR News</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Hrevents">HR Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Hrstories">HR Stories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Appointed">Appointed</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Newsletter">Newsletter</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Career">Career</Link>
                            </li>
                        </ul>
                        <form className="d-flex align-items-center search-btn" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-secondary bg-white .text-dark submit" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {/* Naviagtion section End */}
        </>
    )
}

export default Navbar
