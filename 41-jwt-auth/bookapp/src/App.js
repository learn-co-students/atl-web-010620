import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import BookContainer from './Components/BookContainer'
import BookForm from './Components/BookForm';
import Login from './Components/Login';
import SignUp from './Components/SignUp';


import { withRouter } from 'react-router';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

class App extends Component {

  handleLogin = (userObj) => {

    fetch('http://localhost:3000/login',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: userObj })
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('auth_token',data.token)
      this.setState({ login: true })
    })
  }


  render(){
    return (
      <Router>

        <Header />

        <Switch>

          <Route exact path="/">
            {
              localStorage.getItem('auth_token')
                ?
                  <BookContainer />
                 : <Redirect to='/login' />
              }
            }
          </Route>

          <Route path="/newbook" component={() => (<BookForm />)} />

          <Route path="/login">
            <Login handleLogin={this.handleLogin} />
          </Route>

          <Route path="/logout" component={() => {
            localStorage.clear()
            return <Redirect to='/login' />
          }} />

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route>
            <Redirect to='/' />
          </Route>

        </Switch>

      </Router>
    );
  }
}

export default App;
