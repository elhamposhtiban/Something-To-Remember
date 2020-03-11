import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

import Dolist from "./components/pages/doList";
import Budget from "./components/pages/expenses";
import {Col,Row,Container} from "./components/Grid"

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
              <Navbar />
              <Switch>
                <Route exact path="/" component={ Home } />
                <div className="container">
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />
                  <Route exact path="/dolist" component={ Dolist } />
                  <Route exact path="/budget" component={ Budget } />
                </div>
                </Switch>
            </div>
          
          </Router>
        </Provider>
    );
  }
}

export default App;