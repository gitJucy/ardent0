import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import fork from '../img/fork.svg'
import forkr from '../img/forkr.svg'

class Badger extends Component{
    render(){
        return(
            <div className='row d-flex justify-content-center'id='badger'>
               
                <h3><img id='splash1'src={forkr}/> <Link to='/contact'style={{color:'#f66400ff', textDecoration:'none'}}> Contact Us Today! </Link><img  id='splash1'src={fork}/></h3>
            </div>
        )
    }
}
export default Badger