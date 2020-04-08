import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { setSerachField } from '../actions';


const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSerachField(event.target.value))
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  // With anything that comes from React, so constructor and render pre-build in React
  // Any time you make your own methods on a component, use this syntax  'onSearchChange = (event) => {'
  // so arrow functions, and this makes that the "this" value is according to where it was created
  // which in this case was the "App"
  // Use " this.setState" every time you want to change "state"

  render() {
    const {robots} = this.state; 
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robots.filter((robot) =>
      robot.name
        .toLowerCase()
        .includes(searchField.toLocaleLowerCase())
    );

    return !robots.length ? <h1 className='dt center pv7-ns'>  Loading...</h1> : //ternary operator 

      (<div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
      );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
