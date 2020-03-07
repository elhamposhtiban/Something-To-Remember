import React from 'react';
import Dolist from "./pages/doList"
import Navbar from "./components/Navbar/index"
import {Col,Row,Container} from "./components/Grid"

function App() {
  return (
    <div>
      <Navbar/>
      <Container>
         <Dolist/>
      </Container>

    </div>

  );
}

export default App;
