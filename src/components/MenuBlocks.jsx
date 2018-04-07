import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
class MenuBlock extends Component {
    render() {
        return (
            <div className='container MenuBlock-wrapper'>
                <div className='d-flex row justify-content-around'>
                    <div className='col-sm'>
                        <Link to='/sales'><div className='box1'>
                            <h1>New</h1>
                        </div></Link>
                    </div>
                    <div className='col-sm'>
                    <Link to='/sales'><div className='box2'>
                            <h1>Used</h1>
                        </div></Link>
                    </div>
                    <div className='col-sm'>
                    <Link to='/rentals'><div className='box3'>
                            <h1>Rentals</h1>
                        </div></Link>
                    </div>
                </div>
                <div className='d-flex row justify-content-around'>
                    <div className='col-sm'>
                    <Link to='/service'><div className='box4'>
                            <h1>Service/ Parts</h1>
                        </div></Link>
                    </div>
                    <div className='col-sm'>
                    <Link to='/warranty'><div className='box5'>
                            <h1>Warranty</h1>
                        </div></Link>
                    </div>
                    <div className='col-sm'>
                    <Link to='/contact'><div className='box6'>
                            <h1>Contact</h1>
                        </div></Link>
                    </div>
                </div>
            </div>
        );
    }
}


export default MenuBlock