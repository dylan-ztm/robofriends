import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component { //Component is from React.Component.  see "import React" above.
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        } //end of this.state
    } //end of constructor()

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
        } //end of componentDidMount
 
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    } //end of onSearchChange

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        }); //end of robots.filter

        if (robots.length === 0) {
            return <h1>Loading</h1>
        } else {
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        ); //closing bracket for App's return statement
      } //end else
    } //end of render
} //end of class App

export default App;