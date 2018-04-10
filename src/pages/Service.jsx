import React ,{Component} from 'react'
import Brands from '../components/Brands'
import Badger from '../components/Badger'

class Service extends Component {
    render() {
        return (
            <div className='content container-fluid'>
                <div className='sales-wrapper'>
                    <h1>Service and Parts</h1>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-sm parts-img'></div>
                        <div className='col-sm'>
                           <p className='sales-txt'>
                           <span id ='pop'>Ardent’s Four Hour Guarantee </span><br/>When you have equipment down, you need it working again fast.  We pledge to have one of our certified technicians at your facility and working to limit your downtime within FOUR HOURS of your call, or your FIRST hour is on us.<hr/>
                           <h2>We are proud to service ALL makes and models of material handling equipment. </h2><hr/>
                           Our extensively stocked <span id='pop'> Parts Department </span>means less downtime for you when parts are needed. Our partnership with Clark Totalift means that whatever brand of forklift you have, we can supply the right part for the job. In addition to Clark, we also supply parts to support:
                           <div className='brand-slide container-fluid d-flex justify-content-center'>
                           <Brands />
                           </div>
                            </p>
                            
                        </div>
                    </div>
                  
                </div>
                <Badger />
            </div>
        );
    }
}


export default Service