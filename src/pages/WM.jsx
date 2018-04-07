import React ,{Component} from 'react'


class WM extends Component {
    render() {
        return (
            <div className='content container-fluid'>
                <div className='sales-wrapper'>
                    <h1>Our Warranties</h1>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-sm WM-img'></div>
                        <div className='col-sm'>
                           <p className='sales-txt'>
                           To allow you to focus on your primary business and not your equipment, Ardent Industrial Equipment offers efficiency through maintenance and warranty plans. 
                           Available for both new and pre-owned equipment, we can provide maintenance plans to ensure optimal performance and minimal downtime, and our warranty plans provide peace of mind against unexpected and unbudgeted breakdowns of major components.  
                           Ardent Industrial Equipment offers customizable solutions for your specific needs. <hr/>Available options to support you include:<br />
                           <li>New Truck Extended Warranties</li>
                           <li>Used Truck Extended Warranties</li>
                           <li>New and Used Total Maintenance Plan </li>
                           <li>Labor Only Plan</li> 
                           <li>Parts Only Plan</li>
                           <li>Condition Monitoring</li>
                           <li>Planned Maintenance (PM) Agreements</li>
                           
                            </p>
                        </div>
                    </div>
                  
                </div>
            </div>
        );
    }
}


export default WM