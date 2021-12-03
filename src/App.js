import React, { Component } from 'react';
import NameForm from './components/NameForm';
import Welcome from './components/Welcome';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NameList from './components/NameList';
import StyleShow from './components/StyleShow';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import Example from './components/Example';

function App() {
  const x = (1 === 1) ? "x1" : "x...";
  function greet(childName) {
    //alert(`Hello ${x}  from  ${childName}`);
    x = childName;
  }
  return (
    <div className="container" id="app">
      {/*
      <Welcome name="Sara" weight={40} greetHandler={greet} />
      <Welcome name="David" weight={50} greetHandler={greet} />
      <h2>{x}</h2> 
      <StyleShow /> */}
      <NameList/>
    </div>
  );

}

export default App;
