import React from 'react'
import {url} from '../constants'
import * as request from 'superagent'

export default class ChatroomForm extends React.Component {
  state = {
    message: ""
  }

  onChange = event => {
    this.setState({
      message: event.target.value
    })
  }
  
  onSubmit = (event) => {
    event.preventDefault()
    request.post(`${url}/message`)
            .send({message: this.state.message})
            .catch(console.error)
    this.setState({
      message: ""
    })
  }

  render() {
    return (<div>
      <form onSubmit={this.onSubmit}>
        <input
          name='messageForm'
          type='text'
          onChange={this.onChange}
          value={this.state.message}
          placeholder='Your message'>
        </input>
        <input type='submit'/>
      </form>
    </div>)
  }
}