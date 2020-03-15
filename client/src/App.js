import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import Survey from "./components/Survey/index"
import { setCurrentUser, logoutUser } from './actions/authentication';
// import Navbar from './components/Navbar';
import Register from './components/Register';
// import Login from './components/Login';
import Home from './components/Home/Home';
import Dolist from "./pages/doList";
import Budget from "./pages/expenses";
import Footer from "./components/Footer/index"
import Navbar from "./components/Navbar/index"
if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}
class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
              {window.location.pathname !=="/register"  && window.location.pathname !=="/" 
               ?  <Navbar />: null}
              <Switch>
                <Route exact path="/dashboard" component={ Home } />
                <Route exact path="/" component={ Register } />
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/survey" component={ Survey } />
                  <Route exact path="/dolist" component={Dolist} />
                  <Route exact path="/budget" component={Budget} />
                {/* <Route exact path="/login" component={ Login } /> */}
                </Switch>
              { window.location.pathname !=="/register" && window.location.pathname !=="/"
              ?  <Footer/> : null}
            </div>
          </Router>
        </Provider>
    );
  }
}
export default App;