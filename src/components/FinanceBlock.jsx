import React, {Component}from 'react'
import {Link} from 'react-router-dom'
import logo from '../img/finance.svg'

class FinanceBlock extends Component{
    render(){
        return(
            <div className='finance-block'>
                <img id='money'src={logo}/><hr/>
                <p>From Start-up and Small business to Fortune 500 – we offer both in-house and partner finance and leasing programs to fit your specific needs</p>
                <Link to='/finance'><button id='finance-button'>Click Here For Details</button></Link>
            </div>
        );
    }
}
export default FinanceBlock