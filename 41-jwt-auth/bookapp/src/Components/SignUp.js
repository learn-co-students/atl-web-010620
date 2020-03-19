import React, {Component} from 'react';

class SignUp extends Component {
  render(){
    return(
      <span className={'form-outer'}>
      <h2> Sign up </h2>
      <form className={'add-book'}>
        <input type="text" name='email' placeholder="Email"  />
        <input type="password" name='password' placeholder="Password"  />
        <input id="submit" type="submit" value="Submit" />
      </form>
      </span>
    )
  }
}

export default SignUp;
