import React from 'react';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import './components/Fontawesome/index.js'
import './components/Header/style/style.css';
// import Footer from './components/Footer/Footer.js';
import AppNavbar from './components/Header/Header.js';




// its components importence'

import Home from './components/pages/Home.js'
import About from './components/pages/About.js'
import Projects from './components/pages/Projects.js'
import Contacts from './components/pages/Contacts.js';

// import { Home , About , Projects , Contacts } from './pages';

const App=()=> {
  return (
  <>
        <AppNavbar/>
        <Router>
          <Switch>
            <Route exact path='/' component={Home}><Home/></Route>
             <Route exact path='/About' component={About}><About/></Route>
             <Route exact path='/Projects' component={Projects}><Projects/></Route>
             <Route exact path='/Contacts' component={Contacts}><Contacts/></Route>
          </Switch>
        </Router>
        </>

  )
}

export default App
