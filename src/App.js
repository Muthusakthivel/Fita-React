import React, { Component } from 'react';
import LoginPage from './pages/login';
import Home from './pages/home';
import ContactPage from './pages/contact';
import RegisterPage from './pages/register';
import MailPage from './pages/mail';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

class App extends Component {

  display(){
    let value = prompt("Enter a value...");
    console.log(value);
  }
  render() {
    return (
      <Router>
        <Routes>
          <Route  path="/" exact element={<Home />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route  path="/register"  element={<RegisterPage />}></Route>
          <Route  path="/contact"  element={<ContactPage />}></Route>
          <Route path="/mail/*" element={<MailPage />}></Route>
          {/* <Route path="*" element={<Navigate to="/mail" />}> </Route>                        */}
        </Routes>
      </Router>
    )
  }
}
// https://unsplash.com/photos/RrhhzitYizg

// https://www.npmjs.com/package/axios

// https://reqres.in/api/users?page=2

// Pascel Case - MuthuKumar -> To Define class Name
// Camel Case - muthuKumar -> To Define Function and Variable Name
// snake Case - muthu_kumar -> To Define Function and Variable Name
// Kebab Case - muthu-kumar -> To Define CSS Class name and HTML attribute name

// 2 Ways of Navigation
// 1. using spl HTML Tag (NavLink)
// 2. Using inbuild method(this.props.history.push () )
export default App;

