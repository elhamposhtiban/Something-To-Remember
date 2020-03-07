import React from "react";
// import "../../sass/layout"
// import "../../sass/abstracts"
// // import "./style.css"



const Navbar = () => {

    return(
    
        <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi_toggle"/>
        <label for="navi_toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background"></div>
        <nav className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item"><a href="index.html" className="navigation__link">Home</a></li>
                <li className="navigation__item"><a href="contact.html" className="navigation__link">contact</a></li>
                <li className="navigation__item"><a href="portfolio.html" className="navigation__link">Planning Tools</a></li>
            </ul>
        </nav>
      </div>

    )
}

export default Navbar;