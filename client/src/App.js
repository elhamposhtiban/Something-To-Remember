import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dolist from "./pages/doList";
import Budget from "./pages/expenses";
import Navbar from "./components/Navbar/index"
import {Col,Row,Container} from "./components/Grid"

function App() {
  return (
    
     <Router>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Dolist} />
            <Route exact path="/budget" component={Budget} />
          </Switch>
     </Router>



  );
}

export default App;


      {/* <Container>
         <Dolis>t/>
      </Container> */}