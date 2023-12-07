import React, { useState } from 'react'
import './Header.css';
function Header() {

    const [searchValue, setsearchValue] = useState("");
    const submitSearch = () => {
        alert(searchValue);
    }
    return (
        <header>
            <div className="logo">
                <img src="./img/logo.png" alt="Logo" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search Fresh" value={searchValue} onChange={(event) => setsearchValue(event.target.value)} />
                <button onClick={submitSearch}>&#128269;</button>
            </div>
            <nav className="right-items">
                <ul>
                    <li><a href="/">Login</a></li>
                    <li><a href="/">Register</a></li>
                </ul>
                <div className="profile-icon">&#9776;</div>
            </nav>
        </header>
    )
}

export default Header