import React, { Component } from 'react';
import './style.css';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password:""
    }
    this.handleChange = this.handleChange.bind(this); 
  

  }
  handleChange(event){
    const name=event.target.name
    this.setState({
      [name]:event.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    console.log({
      username:this.state.username,
      pasword:this.state.password
    })
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <lable for="username">UserName:</lable>
          <input type="text" name="username" onChange={this.handleChange} />
        </div>
        <div>
          <lable for="password">PassWord:</lable>
          <input type="password" name="password" onChange={this.handleChange} />
        </div>
        <input type="submit" value="Submit" />


      </form>
    );
  }
}

export default Login;
