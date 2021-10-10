import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import SignUp from './pages/signup';
import SignIn from './pages/signin';

function App() {  
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/signin' component={SignIn}/>
      </Switch>
    </Router>
  );
}

export default App;

