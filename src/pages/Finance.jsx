import React, {Component}from 'react'
import Badger from '../components/Badger'
import fin from '../img/finance1.svg'
// import fork from '../img/fork11.png'
class Finance extends Component{
    render() {
        return (
            <div className='sales content container-fluid'>
                <div className=' sales-wrapper'>
                <div className='headwrap row d-flex justify-conent-end align-items-center'><h1>Financing</h1></div> 
                <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-sm finance-txt'>
                           <p className=''>
                               <img id='splash'src={fin}/><hr/>
                               From Start-up and Small business, to Fortune 500 – <span id='pop'>We offer both in-house and partner finance and leasing programs</span> to fit your specific needs, taking into consideration your:
                               <div className='finance-txt1'>
                                    <h2>Type of product(s)</h2>
                                    <h2>Hours of use</h2>
                                    <h2>Targeted monthly budget for payments</h2>
                                    <h2>Usage patterns</h2>
                                    <h2>Facility demands</h2>
                                    <h2>Seasonality</h2>
                               </div>
                            </p>
                        </div>
                        {/* <div className='col-sm f-pix'><img src={fork}/></div> */}
                    </div>
                </div>
                <Badger />
            </div>
           
        );
    }
}
export default Finance