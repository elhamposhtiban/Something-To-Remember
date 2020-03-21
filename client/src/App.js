import React  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import Register from './components/Register';
import Home from './components/Home/Home';
import Survey from "./pages/survey"
import Dolist from "./pages/doList";
import Budget from "./pages/expenses";
import Header from "./components/Header/index";
import { LayoutOne, LayoutTwo } from "./components/Layout"



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


const App = () => {

    return (
      <Provider store = { store }>

        <Router>

                <Switch>
                  <RouteWrapper exact path="/dashboard" component={ Home } layout={LayoutTwo}/>
                  <RouteWrapper exact path="/" component={ Header } layout={LayoutOne} />
                  <RouteWrapper exact path="/register" component={ Register } layout={LayoutOne} />
                  <RouteWrapper exact path="/survey" component={ Survey } layout={LayoutOne} />
                  <RouteWrapper exact path="/dolist" component={Dolist} layout={LayoutTwo} />
                  <RouteWrapper exact path="/budget" component={Budget} layout={LayoutTwo} />
                </Switch>
           
        </Router>

      </Provider>
    );

    function RouteWrapper({
      component: Component, 
      layout: Layout, 
      ...rest
    }) {
      return (
        <Route {...rest} render={(props) =>
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        } />
      );
    }
  
}
export default App;