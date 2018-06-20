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
                    <title>Equipment Rentals From Ardent Industrial Equipment</title>
                    <meta name='description' content='Whether you need a forklift or other material handling equipment for a day, a week, a month, or a year we want to help. 
                    Rent-to-Own options available for all equipment'/>
                </Helmet>

                <div className='sales-wrapper'>
                <div className='headwrap row d-flex justify-conent-end align-items-center'><h1>Rentals</h1></div> 
                <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-sm'>
                           <div className='finance-txt'>
                               <img id='splash'src={key} alt='key icon'/><hr/>
                               <div className='finance-txt1'>
                                    Modern, late model, well-kept rental fleet. <br/>
                                    Our on the ground and off site rental resources can fill virtually every need. <hr/>
                                    Whether you need it for a day, a week, a month, or a year we want to help. <hr/>
                                    Rent-to-Own options available for all equipment
                                </div>
                            </div>
                        </div>
                        <div className='col-sm f-pix'><img src={fork} alt='man driving a very nice rented forklift'/></div>

                    </div>
                  
                </div>
                <Badger />
            </div>
        );
    }
}


export default Rentals