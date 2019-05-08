import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    user: 'Rein',
  }

  componentDidMount(){
    // this.state.user = 'Mimi' // react has no idea
    // console.log('MOUNTED')
    this.setState({
      userId: 1,
      user: 'Mimi',
    })
  }

  // Define our callback here
  updateUser = (user) => {
    this.setState({
      user: user,
      newUser: ''
    })
  }


  render(){
    // console.log('PROPS:', this.props, 'STATE:', this.state)
    return (
      <div className="App">
        <header className="App-header">
          <Title user={this.state.user}/>
          {/* Pass down callback prop: updateUser */}
          <Form updateUser={this.updateUser}/>
        </header>
      </div>
    );
  }
}

class Form extends Component {
  state = {
    newUser: ''
  }

  handleChange = (event) => {
    this.setState({ 
      newUser: event.target.value 
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props)
    this.props.updateUser(this.state.newUser) // use callback to setState user in App
    this.setState({ newUser: ''}) // setState form with empty (to clear input field)
  }

  render(){
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>User name:</label>
        <input value={this.state.newUser} onChange={this.handleChange}/>
        <input type='submit'/>
      </form>
    )
  }
}

class Title extends Component {
  render(){
    return <h1>{this.props.user}</h1>
  }
}


export default App;
