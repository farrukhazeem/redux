import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

// Mapping the component's property to Redux's state
function mapStateToProps(state) {
    return {
        // counter - this will be component's property counter and can be accessed
        // as this.props.counter
        // state - this will be the state of redux, whatever value we return from
        // reducer function will be in state, for now we are sending simple numaric
        // value therefore it will be simple integer
        counter: state,
        hellow: "World",
    };
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>App {this.props.counter} </h1>
        <br />
       <h3> App {this.props.hellow} </h3>
      </div>
    );
  }
}

// connect function will wrap component and attached properties
// from mapStateToProps into App component
export default connect(mapStateToProps)(App);
