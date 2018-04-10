import React ,{Component} from 'react'
import Badger from '../components/Badger'


class Rentals extends Component {
    render() {
        return (
            <div className='content container-fluid'>
                <div className='sales-wrapper'>
                    <h1>Rentals</h1>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-sm rental-img'></div>
                        <div className='col-sm'>
                           <p className='sales-txt'>
                            Modern, late model, well-kept rental fleet. <br/>
                            Our on the ground and off site rental resources can fill virtually every need. <br/>
                            Whether you need it for a day, a week, a month, or a year we want to help. <br/>
                            Rent-to-Own options available for all equipment
                            </p>
                        </div>
                    </div>
                  
                </div>
                <Badger />
            </div>
        );
    }
}


export default Rentals