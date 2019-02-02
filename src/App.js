import React, { Component } from 'react';
import Header from './components/Header';

import { Router, Route, Switch} from 'react-router-dom';

import {Provider} from 'react-redux';
import store, {history} from './store';


import UsersList from './components/UsersList';
import Login from './components/Login';
import Logout from './components/Logout';
import Requests from './components/Requests';
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
                        <Route path="/logout" component={Logout} />
                    </Switch>
                  </div>

              </React.Fragment>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
