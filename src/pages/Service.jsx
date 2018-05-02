import React ,{Component} from 'react'
import {Helmet} from 'react-helmet'
import Brands from '../components/Brands'
import Badger from '../components/Badger'
import hour from '../img/4hour.svg'
// import fork from '../img/fork11.png'
class Service extends Component {
    render() {
        return (
            <div className='sales content container-fluid'>
                <Helmet>
                    <meta charset='utf-8'/>
                    <title>Ardent Services All Makes and Models of Material Handling Equipment</title>
                    <meta name='description' content='Ardent services all material handling equipment and is ready to fill your needs with an extensively stocked parts department.  We are proud to offer a "four hour guarantee" and peace of mind to our valued customers.'/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="theme-color" content="#000000"/>
                    <meta name="google-site-verification" content="mbkAe5tudYu8225OWgUzF7W5cTsX2OPsTUtz0OkSdAk" />    
                </Helmet>
                <div className='sales-wrapper'>
                <div className='headwrap row d-flex justify-conent-end align-items-center'><h1>Service & Parts</h1></div> 
                <div className='row d-flex justify-content-center align-items-center'>
                       <div className='col-sm finance-txt'>
                           <p>
                            <img id='badge'src={hour} /><br/>
                           <span id ='pop'>Ardent’s Four Hour Guarantee </span><br/>When you have equipment down, you need it working again fast.  We pledge to have one of our certified technicians at your facility and working to limit your downtime within FOUR HOURS of your call, or your FIRST hour is on us.
                          <div className='finance-txt1'><h2>We are proud to service ALL makes and models of material handling equipment. </h2></div>
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