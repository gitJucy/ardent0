import React, {Component}from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/finance.svg'

class FinanceBlock extends Component{
    render(){
        return(
            <div className='row d-flex align-items-center justify-content-center finance-block'>
                <div className='col-sm'>
                <img id='money'src={logo}/>
                <p>From Start-up and Small business to Fortune 500 – we offer both in-house and partner finance and leasing programs to fit your specific needs</p>
                <Link to='/finance'><button id='finance-button'>Ardent Financing</button></Link>
                </div>
            </div>
        );
    }
}
export default FinanceBlock