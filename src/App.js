import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home'
import Sales from './pages/Sales'
import Rentals from './pages/Rentals'
import Service from './pages/Service'
import Parts from './pages/Parts'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
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
         <Footer/>
      </div>
     </Router>
    );
  }
}

export default App;
