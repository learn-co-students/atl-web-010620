import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import BookContainer from './Containers/BookContainer';
import BookForm from './Containers/BookForm';

import Header from './Components/Header';

import CheckLogin from './Auth/CheckLogin';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';

class App extends React.Component {

  state = {
    logged_in: false
  }

  handleLogin = () => {
    this.setState({ logged_in: true })
  }

  handleLogout = () => {
    localStorage.clear()
    this.setState({ logged_in: false })
  }

  render(){
    return (
      <Router>
        <Header />

        <Switch>

          <Route exact path='/' component={() => {
            return <CheckLogin component={BookContainer} />
          }} />
          
          <Route exact path='/login' component={() => {
            return <Login handleLogin={this.handleLogin} />
          }} />

          <Route exact path='/signup' component={() => {
            return <SignUp handleLogin={this.handleLogin} />
          }} />

          <Route exact path='/newbook' component={() => {
            return <CheckLogin component={BookForm} />
          }} />

          <Route exact path='/logout' component={() => {
            this.handleLogout()
            return <Redirect to='/login' />
          }} />

          {
            // Default Path if the route doesn't match
          }
          <Route>
            <Redirect to='/' />
          </Route>
        </Switch>

      </Router>
    );
  }
}

export default App;
