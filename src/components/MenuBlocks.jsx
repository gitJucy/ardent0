import React ,{Component} from 'react'

class MenuBlock extends Component {
    render() {
        return (
            <div className='container MenuBlock-wrapper'>
                <div className='d-flex row justify-content-around'>
                    <div className='col-sm'>
                        <a href='/sales'><div className='box1'>
                            <h1>New Sales</h1>
                        </div></a>
                    </div>
                    <div className='col-sm'>
                    <a href='/sales'><div className='box2'>
                            <h1>Used Sales</h1>
                        </div></a>
                    </div>
                    <div className='col-sm'>
                    <a href='/rentals'><div className='box3'>
                            <h1>Rentals</h1>
                        </div></a>
                    </div>
                </div>
                <div className='d-flex row justify-content-around'>
                    <div className='col-sm'>
                    <a href='/service'><div className='box4'>
                            <h1>Service</h1>
                        </div></a>
                    </div>
                    <div className='col-sm'>
                    <a href='/parts'><div className='box5'>
                            <h1>Parts</h1>
                        </div></a>
                    </div>
                    <div className='col-sm'>
                    <a href='/contact'><div className='box6'>
                            <h1>Contact</h1>
                        </div></a>
                    </div>
                </div>
            </div>
        );
    }
}


export default MenuBlock