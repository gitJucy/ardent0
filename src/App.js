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
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ScrollToTop from './components/Scroll'
import sitemap from './pages/sitemap'
import './App.css';
class App extends Component {
  state={
    loading: true
  };
  componentDidMount(){
    setTimeout(()=> this.setState({loading:false}),1000);
  }
  render() {
    const {loading}= this.state;
    if (loading) {
      return null;
    }
    return (
      <div id='app'class='loader'>
      <Router>
        <ScrollToTop>
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
          <Route path='/contact' component={Contact}/>
          <Route path='/sitemap' component={sitemap}/>
          <Route path='*' component={Error} />
        </Switch>
        <Footer/>
        </div>
        </ScrollToTop>
      </Router>
      </div>
    );
  }
}

export default App;
