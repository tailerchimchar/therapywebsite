import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Inquiries from './components/Inquiries';
import Contact from './components/Contact';
import './index.css';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <header>
          {/* Navigation Bar */}
          <nav className='navbar'>
            <ul>
              <li><Link to="/Home" className = "link">Home</Link></li>
              <li><Link to="/about"className = "link">About Me</Link></li>
              <li><Link to="/inquiries"className = "link">Submit Inquiries</Link></li>
              <li><Link to="/Contact"className = "link">Contact me</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/inquiries" component={Inquiries} />
            <Route path="/Contact" component={Contact} />
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
