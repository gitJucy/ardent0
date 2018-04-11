import React, {Component} from 'react'
import logo from '../logo.svg'
import {Link} from 'react-router-dom'
import phone from '../img/phone.svg'

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
                    <li className="nav-item dropdown">
                        <a href='#' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Equipment</a>
                        <div className='dropdown-menu'aria-labelledby="navbarDropdown">
                            <Link to='/sales' className="nav-link">New Equipment</Link>
                            <Link to='/used' className="nav-link">Used Equipment</Link>
                            <Link to='/rentals' className="nav-link" >Rentals</Link>

                        </div>
                    </li>
                    <li className="nav-item" data-toggle='hide' data-target='#navbarNavDropdown'>
                        <Link to='/service' className="nav-link">Service/ Parts</Link>
                    </li>
                    <li className="nav-item"data-toggle='collapse' data-target='#navbarNavDropdown'>
                        <Link to='/warranty' className="nav-link">Warranty</Link>
                    </li>
                    <li className="nav-item"data-toggle='collapse' data-target='#navbarNavDropdown'>
                        <Link to='/finance' className='nav-link'>Financing</Link>
                    </li>

                    <li className="nav-item"data-toggle='collapse' data-target='#navbarNavDropdown'>
                        <Link to='/contact' className="nav-link">Contact Us</Link>
                    </li>

                    <li>
                       <a href='tel:1+888-999-8066' ><span className='navbar-text'><img className='splash'src={phone}/>(888) 999-8066</span></a>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar