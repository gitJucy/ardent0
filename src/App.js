import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Sales from './components/Sales'
import Rentals from './components/Rentals'
import Service from './components/Service'
import Parts from './components/Parts'
import NavBar from './components/NavBar'
class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <NavBar/>
         <Route exact path='/' component={Home}/>
         <Route path='/sales' component={Sales}/>
         <Route path='/rentals' component={Rentals}/>
         <Route path='/service' component={Service}/>
         <Route path='/parts' component={Parts}/>
        </div>
     </Router>
    );
  }
}

export default App;
