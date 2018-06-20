import React ,{Component} from 'react'
import {Helmet} from 'react-helmet'
import Badger from '../components/Badger'
import warranty from '../img/warranty.svg'
// import fork from '../img/fork11.png'

class WM extends Component {
    render() {
        return (
            <div className='sales content container-fluid'>
                <Helmet>
                    <title>Ardent's Customizable Solutions for Maintenance and Warranty Service.</title>
                    <meta name='description' content='Ardent wants you to focus on your primary business, not your tools.  That is why we offer efficiency and peace of mind through customizable warranty packages to suit your needs.  Visit our Savannah GA location to talk with one of our representatives and learn how we can protect you from the unexpected.' />
                </Helmet>
                <div className='sales-wrapper'>
                   <div className='headwrap row d-flex justify-conent-end align-items-center'><h1>Our Warranties</h1></div> 
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-sm finance-txt'>
                           <p className=''>
                               <img id='badge'src={warranty} alt='certification icon'/><hr/>
                           <div className='finance-txt1'>To allow you to focus on your primary business and not your equipment, Ardent Industrial Equipment offers <span id='pop'> efficiency</span> through maintenance and warranty plans. 
                           Available for both new and pre-owned equipment, we can provide maintenance plans to ensure <span id='pop'> optimal performance</span> and <span id='pop'> minimal downtime.</span> Our warranty plans provide <span id='pop'> peace of mind</span> against unexpected and unbudgeted breakdowns of major components.  
                           Ardent Industrial Equipment offers customizable solutions for your specific needs. </div><hr />
                           <span id='pop'>Available options to support you include:</span><br />
                           <li>New Truck Extended Warranties</li>
                           <li>Used Truck Extended Warranties</li>
                           <li>New and Used Total Maintenance Plan </li>
                           <li>Labor Only Plan</li> 
                           <li>Parts Only Plan</li>
                           <li>Condition Monitoring</li>
                           <li>Planned Maintenance (PM) Agreements</li>
                           
                            </p>
                        </div>
                        {/* <div className='col-sm f-pix'><img src={fork}/></div> */}

                    </div>
                  
                </div>
                <Badger/>
            </div>
        );
    }
}


export default WM