import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'; 
import Scroll from '../components/Scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots:[],
      searchfield: '',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}));
  }

  // With anything that comes from React, so constructor and render pre-build in React
  // Any time you make your own methods on a component, use this syntax  'onSearchChange = (event) => {'
  // so arrow functions, and this makes that the "this" value is according to where it was created
  // which in this case was the "App"
  // Use " this.setState" every time you want to change "state"
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) =>
      robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLocaleLowerCase())
    );

     return !this.state.robots.length ? <h1 className='dt center pv7-ns'>Loading...</h1>: 

   (<div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
        <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
    
  }
}

export default App;
 