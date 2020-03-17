
import React from 'react';
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";

const LayoutOne = ({children}) => 
  <div>

    {children}

  </div>;

const LayoutTwo = ({children}) => 
  <div>
        <Navbar/>

            {children}
            
        <Footer/>
  </div>;

export { LayoutOne, LayoutTwo };