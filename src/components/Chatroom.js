import React from 'react'
import { url } from '../constants'
import ChatroomForm from './ChatroomForm'
import { addMessages} from '../actions' //it is not the dfault so has to be in {}
import {connect} from 'react-redux'

class Chatroom extends React.Component {
  state = {
    messages: []
  }
  source = new EventSource(`${url}/stream`)

  componentDidMount() {
 // console.log('component did mount')

    this.source.onmessage = event => {
      //   console.log('Got a message', event)
      const messages = JSON.parse(event.data)
      this.setState({
        messages
      })
      this.props.addMessages(messages)
    }
    //console.log('event source', this.source)

  }

  render() {
    return (
      <div>
        {this.state.messages.map(message => <li key={message.id}>{message.message}</li>)}
        <ChatroomForm />
      </div>
    )
  }
}

function mapStateToProps (reduxState) {
//  console.log('mstp of chatroom', reduxState)
  return {
     messages: reduxState.messages
  }
}
const mapDispatchToProps = {addMessages}
export default connect(mapStateToProps, mapDispatchToProps)(Chatroom)