import React from 'react';
import SimpleFormSubmition from './Components/simple-form';
import './Styles/ui-style.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import HomePage from './Pages/home';
import ContactPage from '../src/Pages/contact';
import AboutPage from '../src/Pages/about';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='contact' element={<ContactPage></ContactPage>}></Route>
        <Route path='about' element={<AboutPage></AboutPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;