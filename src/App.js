import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/About';
import Approach from './components/Approach.js';
import Home from './components/Home';
import Inquiries from './components/Inquiries';
import Contact from './components/Contact';
import Services from './components/Services.js';
import './index.css';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import './custom.css';
import './background.js'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <header>
          <link href="http://fonts.googleapis.com/css?family=Corben:bold" rel="stylesheet" type="text/css"></link>
          <link href="http://fonts.googleapis.com/css?family=Nobile" rel="stylesheet" type="text/css"></link>
          <link rel="stylesheet" href="/css/font-awesome.css"></link>

          {/* Navigation Bar */}
          <nav className='navbar'>
            <ul>
              <li><Link to="/Home" className = "link">Home</Link></li>
              <li><Link to="/about"className = "link">About Me</Link></li>
              <li><Link to="/approach"className = "link">Approach</Link></li>
              <li><Link to="/inquiries"className = "link">Submit Inquiries</Link></li>
              <li><Link to="/Contact"className = "link">Contact me</Link></li>
              <li><Link to="/Services"className = "link">Services</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/approach" component={Approach} />
            <Route path="/inquiries" component={Inquiries} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Services" component={Services} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink exact to="/" activeClassName="active" className="nav-link">
        Home
      </NavLink>
      <NavLink exact to="Home" activeClassName="active" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/About" activeClassName="active" className="nav-link">
        About Me
      </NavLink>
      <NavLink to="/Home" activeClassName="active" className="nav-link">
        Inquiries
      </NavLink>
      <NavLink to="/Inquiries" activeClassName="active" className="nav-link">
        Contact me
      </NavLink>
      {/* Add other navigation links */}
    </nav>
  );
}

export default App;
