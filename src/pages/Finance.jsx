import React, {Component}from 'react'
import Badger from '../components/Badger'
import fin from '../img/finance1.svg'
class Finance extends Component{
    render() {
        return (
            <div className='sales content container-fluid'>
                <div className=' sales-wrapper'>
                <div className='headwrap row d-flex justify-conent-end align-items-center'><h1>Financing</h1></div> 
                <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-sm finance-img'></div>
                        <div className='col-sm'>
                           <p className='sales-txt'>
                               <img id='splash'src={fin}/><hr/>
                               From Start-up and Small business, to Fortune 500 – we offer both in-house and partner finance and leasing programs to fit your specific needs, taking into consideration your:
                               <ul className='list-unstyled'><br/>
                                    <span id='pop'><li>Type of product(s)</li></span>
                                    <span id='pop'><li>Hours of use</li></span>
                                    <span id='pop'><li>Targeted monthly budget for payments</li></span>
                                    <span id='pop'><li>Usage patterns</li></span>
                                    <span id='pop'><li>Facility demands</li></span>
                                    <span id='pop'><li>Seasonality</li></span>
                               </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <Badger />
            </div>
           
        );
    }
}
export default Finance