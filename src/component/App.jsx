import React from 'react'
import ReactDOM from 'react-dom'

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export default class App extends React.PureComponent {
    state = {}
    componentDidMount() {
    }
    render() {
        return <div><input autocomplete="off" onChange={this.onChatChange} /><button onClick={this.onSend}>Send</button></div>

    }

    onChatChange(e) {
        this.setState({ chat: e.target.value })
    }

    onSend() {
        socket.emit('chat message', this.state.chat);
    }
}