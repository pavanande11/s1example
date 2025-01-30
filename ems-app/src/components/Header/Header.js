import React from 'react';
import "./Header.css"
function Header(props) {
    return (
        <span className="header" onClick={()=>window.scroll(0,0)}>Entertaiment Hub </span>
    );
}

export default Header;