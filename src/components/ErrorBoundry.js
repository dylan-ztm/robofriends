import React, { Component } from 'react';

class ErrorBoundry extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    } //end constructor

    componentDidCatch() {  //adding lifecycle hook
        this.setState({hasError: true});
    } //end componentDidCatch

    render() {
        if (this.state.hasError) {
            return <h1>Ooops.  Something went wrong!</h1>
        }
        return this.props.children;
    } //end render

} //end ErrorBoundry

export default ErrorBoundry;