import React from 'react';
import SimpleFormSubmition from './Components/simple-form';
import './Styles/ui-style.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


import HomePage from './Pages/home';
import ContactPage from '../src/Pages/contact';
import AboutPage from '../src/Pages/about';
import MailPage from './Pages/mail';
import Inbox from './Pages/inbox';
import Sent from './Pages/sent';
import Trash from './Pages/trash';
import RegisterPage from './Pages/register';
import UserPage from './Pages/users';
import AccountCreatePage from './Pages/account-create';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='contact' element={<ContactPage></ContactPage>}></Route>
        <Route path='about' element={<AboutPage></AboutPage>}></Route>
        <Route path='mail' element={<MailPage></MailPage>}>
          <Route path='inbox' element={<Inbox></Inbox>}></Route>
          <Route path='sent' element={<Sent></Sent>}></Route>
          <Route path='trash' element={<Trash></Trash>}></Route>
          <Route path='account' element={<AccountCreatePage></AccountCreatePage>}></Route>
        </Route>
        <Route path='register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='users' element={<UserPage></UserPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;