import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    };
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

    return (
      <div className='tc'>
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
