import React from 'react'
import * as request from 'superagent'
import { url } from '../constants'
import { login } from '../actions/auth'
import { connect } from 'react-redux'

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  }

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    //console.log('signing in')
    // console.log('this sign up state' ,this.state)
    request.post(`${url}/login`)
      .send({
        email: this.state.username,
        password: this.state.password
      })
      //.then(result => console.log('let there be a token', result.body))
      .then(result => this.props.login(result.body.jwt))
      .catch(console.error)
    this.setState({
      username: "",
      password: ""
    })
  }

  render() {
    if(this.props.jwt) return 'user is logged in'
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            name='username'
            type='text'
            onChange={this.onChangeUsername}
            value={this.state.username}
            placeholder='username'
          ></input>
          <input
            name='password'
            type='text'
            onChange={this.onChangePassword}
            value={this.state.password}
            placeholder='password'
          ></input>
          <button type='submit'>Login</button>
        </form>
      </div>)
  }
}
function mapStateToProps(reduxState) {
  return {
    jwt: reduxState.auth
  }
}
export default connect(mapStateToProps, { login })(Login)