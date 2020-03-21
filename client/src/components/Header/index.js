import React from "react";



const Header = () => {
    return (

    // if (user is authenticated) {
    //     logout
    // }
    // else{

    // }
     <header className="header">
        <div className="text-box">
            <h1 className="heading-primary">
                <span className="heading-primary-main ">some thing to remember</span>
                <span className="heading-primary-sub">we can help you to plan your dream day here with us.. </span>
            </h1>
            <a href="#about-me" className="btn btn--header" onClick={() =>  window.location.href='/register'}> shall we start ?</a>
        </div>
      </header>
    )

}

export default Header;