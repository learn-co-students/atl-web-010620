import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleLogin(this.state)
    this.props.histroy.push('/')
    // Above line would've fixed the error 
  }

  render(){
    return(
      <span className={'form-outer'}>
      <h2> Login </h2>
      <form className={'add-book'} onSubmit={this.handleSubmit}>
        <input type="text" name='email' placeholder="Email" onChange={this.handleInput} value={this.state.email} />
        <input type="password" name='password' placeholder="password" onChange={this.handleInput} value={this.state.password} />
        <input id="submit" type="submit" value="Submit" />
      </form>
      </span>
    )
  }
}

export default withRouter(Login);
