import React from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import Contact from "./pages/Contact.js"
import Home from "./pages/Home.js"
import Usr from "./pages/Users.js"

function App() {
  return (
    <Router>
      <div>
         <h1>Hello World 123</h1>
         <ul>
           <Link to="/home"><li>home</li></Link>
           <Link to="/contact"><li>contact</li></Link>
           <Link to="/user"><li>user</li></Link>
         </ul>
         <Switch>
           <Route path="/home" component={Home} />
           <Route path="/contact" component={Contact} />
           <Route path="/user" component={Usr} />
         </Switch>
      </div>
    </Router>
  );
}

export default App;
