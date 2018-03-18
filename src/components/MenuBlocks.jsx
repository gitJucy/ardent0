import React ,{Component} from 'react'

class MenuBlock extends Component {
    render() {
        return (
            <div className='container-fluid MenuBlock-wrapper'>
                <div className='row row1 d-flex justify-content-center align-content-center'>
                    <div className='col-sm'>
                        <a href='#'><div className='box1'>
                            <h1>New Sales</h1>
                        </div></a>
                    </div>
                    <div className='col-sm'>
                    <a href='#'><div className='box2'>
                            <h1>Used Sales</h1>
                        </div></a>
                    </div>
                    <div className='col-sm'>
                    <a href='#'><div className='box3'>
                            <h1>Rentals</h1>
                        </div></a>
                    </div>
                </div>
                <div className='row row2 d-flex justify-content-center align-content-center'>
                    <div className='col-sm'>
                    <a href='#'><div className='box4'>
                            <h1>Service</h1>
                        </div></a>
                    </div>
                    <div className='col-sm'>
                    <a href='#'><div className='box5'>
                            <h1>Parts</h1>
                        </div></a>
                    </div>
                    <div className='col-sm'>
                    <a href='#'><div className='box6'>
                            <h1>Contact</h1>
                        </div></a>
                    </div>
                </div>
            </div>
        );
    }
}


export default MenuBlock