import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dolist from "./pages/doList";
import Budget from "./pages/expenses";
import Navbar from "./components/Navbar/index"
import {Col,Row,Container} from "./components/Grid"

function App() {
  return (
    <div>

      {/* <Container>
         <Dolist/>
      </Container> */}

      <Router>
      <div>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path="/" component={Dolist} />
            <Route exact path="/budget" component={Budget} />
          </Switch>
          </Container>
      </div>
    </Router>

    </div>

  );
}

export default App;
