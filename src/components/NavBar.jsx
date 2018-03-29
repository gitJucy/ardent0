import React, {Component} from 'react'
import logo from '../logo.svg'
import {Link} from 'react-router-dom'

class NavBar extends Component{
    render(){
        return(
            <nav className="navbar fixed-top navbar-expand-lg navbar-light" id='navBar'>
                <Link to='/' className="navbar-brand" ><img src={logo} alt='ardent-logo'id='logo'/></Link>
                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto navbuttons align-items-center" >
                    <li className="nav-item">
                        <Link to='/sales' className="nav-link">Sales </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/rentals' className="nav-link">Rentals</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/service' className="nav-link">Service</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/parts' className="nav-link">Parts</Link>
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