import React from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
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



>>>>>>> 5169ab609651e0ae42000b04662fc22febb4511d
  );
}

export default App;


      {/* <Container>
         <Dolis>t/>
      </Container> */}