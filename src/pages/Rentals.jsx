import React ,{Component} from 'react'
import {Helmet} from 'react-helmet'
import Badger from '../components/Badger'
import key from '../img/rent.svg'
import fork from '../img/sales1.jpg'

class Rentals extends Component {
    render() {
        return (
            <div className='sales content container-fluid'>
                <Helmet>
                    <meta charset='utf-8'/>
                    <title>Equipment Rentals From Ardent Industrial Equipment</title>
                    <meta name='description' content='Whether you need a forklift or other material handling equipment for a day, a week, a month, or a year we want to help. 
                    Rent-to-Own options available for all equipment'/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="theme-color" content="#000000"/>
                    <meta name="google-site-verification" content="mbkAe5tudYu8225OWgUzF7W5cTsX2OPsTUtz0OkSdAk" />    
                </Helmet>

                <div className='sales-wrapper'>
                <div className='headwrap row d-flex justify-conent-end align-items-center'><h1>Rentals</h1></div> 
                <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-sm'>
                           <div className='finance-txt'>
                               <img id='splash'src={key}/><hr/>
                               <div className='finance-txt1'>
                                    Modern, late model, well-kept rental fleet. <br/>
                                    Our on the ground and off site rental resources can fill virtually every need. <hr/>
                                    Whether you need it for a day, a week, a month, or a year we want to help. <hr/>
                                    Rent-to-Own options available for all equipment
                                </div>
                            </div>
                        </div>
                        <div className='col-sm f-pix'><img src={fork}/></div>

                    </div>
                  
                </div>
                <Badger />
            </div>
        );
    }
}


export default Rentals