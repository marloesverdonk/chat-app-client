import React from 'react'
import {url} from '../constants'
import ChatroomForm from './ChatroomForm'

export default class Chatroom extends React.Component {
  state = {
    message: []
  }
  source = new EventSource(`${url}/stream`)

  componentDidMount(){
    console.log('component did mount')
    
    this.source.onmessage = event => {
      console.log('Got a message', event)
      const message = JSON.parse(event.data)
      this.setState({
           message
        })
      }
      console.log('event source', this.source)
    
  }

  render(){
  return(
    <div>
     {this.state.message.map(message => <li key={message.id}>{message.message}</li>)}
     <ChatroomForm/>
    </div>
  )
}
}