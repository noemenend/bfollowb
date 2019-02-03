import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import { Router, Route, Switch} from 'react-router-dom';

import {Provider} from 'react-redux';
import store, {history} from './store';


import UsersList from './components/UsersList';
import Login from './components/Login';
import Logout from './components/Logout';
import Requests from './components/Requests';
import UserProfile from './components/UserProfile';
import PrivateProfile from './components/PrivateProfile';
import Clean from './components/Clean';
import NotFound from './components/NotFound';

import {setCurrentUser, logoutUser} from './actions/userActions';


class App extends Component {

  componentDidMount() {
    if(store.getState().auth.isAuthenticated) {
      store.dispatch(setCurrentUser(store.getState().auth.uuid,
                                    store.getState().auth.sampledata));
      
    }  else {
      store.dispatch(logoutUser(history));
    }
    
  }

  render() {
    return (
      <Provider store={store} >
        <Router history={history}>
          <div className="App">
              <React.Fragment>
                  <Header/>

                  <div className="container">
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/users" component={UsersList} />
                        <Route path="/requests" component={Requests} />
                        <Route path="/users/:uuid" component={UserProfile}/>
                        <Route path="/profile" component={PrivateProfile} />
                        <Route path="/clean" component={Clean} />
                        <Route path="/logout" component={Logout} />
                        <Route component={NotFound} />
                    </Switch>
                  </div>
                   <Footer /> 
              </React.Fragment>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
