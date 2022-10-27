import React, { Component } from 'react';
import LoginPage from './Pages/Login';

class App extends Component {

  display(){
    let value = prompt("Enter a value...");
    console.log(value);
  }
  render() {
    return (
      <div>
        <h1 className='heading'>Hello React...</h1>
        <h2 className='sub-heading'>This is App.js Component</h2>
        <button onClick={() => { this.display() }}>Click this Button</button>
        <LoginPage></LoginPage>
      </div>
    )
  }
}
// Pascel Case - MuthuKumar -> To Define class Name
// Camel Case - muthuKumar -> To Define Function and Variable Name
// snake Case - muthu_kumar -> To Define Function and Variable Name
// Kebab Case - muthu-kumar -> To Define CSS Class name and HTML attribute name

export default App;

