import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';







function App() {
  return (
    <div className="App">
       <Router>
      <div>
<Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/PROJECTS">
            <PROJECTS />
            </Route>
          <Route path="/ABOUT">
              <ABOUT />
            </Route>
          <Route path="/SERVICES">
            <SERVICES />
          </Route>
          <Route path="/CONTACT">
            <CONTACT />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  )
};

export default App;

function NAVBAR() {
  return <h2>HOME</h2>;
}

function ABOUT() {
  return <h2>ABOUT</h2>;
}

function PROJECTS() {
  return <h2>PROJECTS</h2>;
}
function SERVICES() {
  return <h2>SERVICES</h2>;
}
function CONTACT() {
  return <h2>CONTACT</h2>;
}