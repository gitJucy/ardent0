import React, {Component} from 'react'
import logo from '../logo.svg'

class NavBar extends Component{
    render(){
        return(
            <nav className="navbar fixed-top navbar-expand-lg navbar-light" id='navBar'>
                <a className="navbar-brand" href="/"><img src={logo} alt='ardent-logo'id='logo'/></a>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto navbuttons align-items-center" >
                    <li className="nav-item">
                        <a className="nav-link" href="/sales">Sales </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/rentals">Rentals</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/service">Service</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/parts">Parts</a>
                    </li>
                    <li>
                        <span className='navbar-text'>(123) 456-7890</span>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar