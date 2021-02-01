import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Signup from './components/pages/Signup';
import Blog from './components/pages/Blog';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about'  component={About}/>
        <Route path='/sign-up'  component={Signup}/>
        <Route path='/blog'  component={Blog}/>
        </Switch>
    </Router>
    </>
    
  );
}

export default App;
