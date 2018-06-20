import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Badger extends Component{
    render(){
        return(
            <div className='row d-flex justify-content-center align-items-center'id='badger'>
               
                <h3><span id='badger-button'> <Link to='/contact'style={{backgroundColor:'transparent',color:'white', textDecoration:'none'}}> Contact Us Today! </Link></span></h3>
            </div>
        )
    }
}
export default Badger