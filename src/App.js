import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    user: 'Rein',
    newUser: ''
  }

  componentDidMount(){
    // this.state.user = 'Mimi' // react has no idea
    console.log('MOUNTED')
    this.setState({
      userId: 1,
      user: 'Mimi',
    })
  }

  handleChange = (event) => {
    this.setState({ 
      newUser: event.target.value 
    })
  }

  handleSubmit = (event) => {
    console.log(this.state.newUser)
    event.preventDefault()
    this.setState({
      user: this.state.newUser,
      newUser: ''
    })
  }

  render(){
    console.log('PROPS:', this.props, 'STATE:', this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1>{ this.state.user }</h1>
          <form onSubmit={this.handleSubmit}>
            <label>User name:</label>
            <input value={this.state.newUser} onChange={this.handleChange}/>
            <input type='submit'/>
          </form>
        </header>
      </div>
    );
  }
}


export default App;
