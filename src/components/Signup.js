import React from 'react'
import * as request from 'superagent'
import {url} from '../constants'

export default class Signup extends React.Component{
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
    console.log('signing in')
    console.log('this sign up state' ,this.state)
    request.post(`${url}/users`)
    .send({
      email: this.state.username,
      password: this.state.password
    })
    .catch(console.error)
    this.setState({
      username: "",
      password: ""
    })
  }

  render(){
    return( <div>
      Signup form
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
        <button type='submit'>Signup</button>
      </form>
    </div>)
  }
}