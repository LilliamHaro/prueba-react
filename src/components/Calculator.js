import React from 'react';
import { connect,Provider } from 'react-redux';
import { createStore } from 'redux'
//import './App.css';


//const { Component } = React;
//const { connect, Provider } = ReactRedux;
//const { createStore, combineReducers } = Redux;

function Display(props) {
  
  return (
    <input type="text" value={props.expression} disabled={true}/>
  )
}


class Key extends React.Component {
  constructor() {
    super();

    this.state ={expression:''}
    this.onKeyPressed = this.onKeyPressed.bind(this);
  }

  onKeyPressed() {
    this.props.onKeyPressed(this.props.text)
  }

  render() {
    return(
    <button onClick={this.onKeyPressed}>{this.props.text}</button>

    )
  }
}


class Calculator extends React.Component {
  constructor() {
    super();


    this.state = {expression:''};
    this.onKeyPressed =this.onKeyPressed.bind(this);
    this.onDelettePressed = this.onDelettePressed.bind(this);
    this.onEvaluatePressed = this.onEvaluatePressed.bind(this)
  }

  onKeyPressed(text) {
    this.setState((prev) => ({
      expression: prev.expression + text
    }));
  }


  onDelettePressed() {
    this.setState((prev) => ({
      expression: prev.expression.length <= 1 ? '' : prev.expression.slice(0,-1)
    }))
  }

  onEvaluatePressed() {
    this.setState((prev) => ({
      expression: eval(prev.expression).toString()
    }))
  }
  render() {
    return(

    <div> 
    <Display expression={this.state.expression}/>
    <Key text="0" onKeyPressed={this.onKeyPressed}/>
    <Key text="1" onKeyPressed={this.onKeyPressed}/>
    <Key text="2" onKeyPressed={this.onKeyPressed}/>
    <Key text="3" onKeyPressed={this.onKeyPressed}/>
    <Key text="4" onKeyPressed={this.onKeyPressed}/>
    <Key text="5" onKeyPressed={this.onKeyPressed}/>
    <Key text="6" onKeyPressed={this.onKeyPressed}/>
    <Key text="7" onKeyPressed={this.onKeyPressed}/>
    <Key text="8" onKeyPressed={this.onKeyPressed}/>
    <Key text="9" onKeyPressed={this.onKeyPressed}/>

    <Key text="+" onKeyPressed={this.onKeyPressed}/>
    <Key text="-" onKeyPressed={this.onKeyPressed}/>
    <Key text="*" onKeyPressed={this.onKeyPressed}/>
    <Key text="/" onKeyPressed={this.onKeyPressed}/>

    <button onClick={this.onDelettePressed}>C</button>
    <button onClick={this.onEvaluatePressed}>=</button>

    </div>
    )
  }
}

export default Calculator