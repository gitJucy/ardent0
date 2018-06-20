import React, {Component}from 'react'
import {Helmet} from 'react-helmet'
import Badger from '../components/Badger'
import fin from '../img/finance1.svg'
// import fork from '../img/fork11.png'
class Finance extends Component{
    render() {
        return (
            <div className='sales content container-fluid'>
                <Helmet>
                    <title>Ardent Industrial Equipment Finance Options</title>
                    <meta name='description' content='Ardent Industrial Equipment provides in-house and partner finance solutions to help you get the equipment you need to get working.'/>
                </Helmet>
                <div className=' sales-wrapper'>
                <div className='headwrap row d-flex justify-conent-end align-items-center'><h1>Financing</h1></div> 
                <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-sm finance-txt'>
                           <div>
                               <img id='splash'src={fin} alt='bank icon'/><hr/>
                               From Start-up and Small business, to Fortune 500 – <span id='pop'>We offer both in-house and partner finance and leasing programs</span> to fit your specific needs, taking into consideration your:
                               <div className='finance-txt1'>
                                    <h3><li>Type of product(s)</li></h3>
                                    <h3><li>Hours of use</li></h3>
                                    <h3><li>Targeted monthly budget for payments</li></h3>
                                    <h3><li>Usage patterns</li></h3>
                                    <h3><li>Facility demands</li></h3>
                                    <h3><li>Seasonality</li></h3>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Badger />
            </div>
           
        );
    }
}
export default Finance