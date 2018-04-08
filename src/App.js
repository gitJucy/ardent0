import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Sales from './pages/Sales'
import Used from './pages/Used'
import Rentals from './pages/Rentals'
import Service from './pages/Service'
import WM from './pages/WM'
import Finance from './pages/Finance'
import Error from './pages/Error'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/sales' component={Sales}/>
          <Route path='/used' component={Used}/>
          <Route path='/rentals' component={Rentals}/>
          <Route path='/service' component={Service}/>
          <Route path='/warranty' component={WM}/>
          <Route path='/finance' component={Finance}/>
          <Route path='*' component={Error} />
        </Switch>
        <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
