import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fork from '../img/fork.svg'
import forkr from '../img/forkr.svg'

class Badger extends Component{
    render(){
        return(
            <div className='row d-flex justify-content-center align-items-center'id='badger'>
               
                <h3><button id='badger-button'> <Link to='/contact'style={{color:'white', textDecoration:'none'}}> Contact Us Today! </Link></button></h3>
            </div>
        )
    }
}
export default Badger