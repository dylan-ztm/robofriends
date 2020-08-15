import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
//import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

//State Management section
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
} //end mapStateToProps

const mapDispatchToProps = (dispatch) => {
    return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
    }
} //end mapDispatchToProps


class App extends Component { //Component is from React.Component.  see "import React" above.
    componentDidMount() { 
        this.props.onRequestRobots();
        } //end of componentDidMount

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        }); //end of robots.filter
        
        return isPending ?
                <h1>Loading</h1> :
                (        
                    <div className='tc'>
                        <h1 className='f1'>RoboFriends</h1>
                        <SearchBox searchChange={onSearchChange}/>
                        <Scroll>
                            <CardList robots={filteredRobots} />
                        </Scroll>
                    </div>
                ); //closing bracket for render's return statement
    } //end of render
} //end of class App

export default connect(mapStateToProps, mapDispatchToProps)(App);