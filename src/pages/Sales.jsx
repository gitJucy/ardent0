import React ,{Component} from 'react'
import ss from '../img/brands/S-Series.png'
class Sales extends Component {
    render() {
        return (
            <div className='content container-fluid'>
                <div className='sales-wrapper'>
                    <h1>New Equipment</h1>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-sm '>
                            <p className='sales-txt'>Dynamic Clark forklifts ranging from 3,000 to 18,000 pounds, JLG’s full line, and Cascade’s renowned attachments allow us to fill your material handling needs.<br/>
                            Ardent provides preventative maintenance, total maintenance, and all warranty services to ensure keeping your equipment optimal and running efficiently is easy.<br/>
                            Your experience before, during and after your purchase is our focus. We will lift with you for years to come.
                            </p>
                        </div>
                        <div className='col-sm sales-img'></div>
                        <div className='col-sm'>
                           <p className='sales-txt'>We have carefully selected our partners to best serve you. <br/>
                            <strong>Clark</strong> – The original inventor of the forklift has now reinvented themselves with cutting edge equipment to meet every need and has the support infrastructure to keep you running. <br/>
                            <strong>JLG</strong> – As the world’s leading designer and manufacturer of access equipment, JLG helps us go above and beyond to support our clients.  <br/>
                            <strong>Cascade</strong> – A global leader in the design, manufacture and marketing of materials handling equipment and related technologies, Cascade products reliably get the job done, whatever that job may be. 
                            </p>
                        </div>
                    </div>
                    <h3>We have the new <img id='ss'src={ss}/> from Clark in stock and ready to demo!</h3>
                    <div className='row img-wrapper'>
                        <div className='col col-sm-4 featured-img'></div>
                        <div className='col-sm-8'>
                            <div className='row0 d-flex justify content-around'>
                                <div className='col-sm-2 img0'></div>
                                <div className='col-sm-2 img1'></div>
                                <div className='col-sm-2 img2'></div>
                                <div className='col-sm-2 img3'></div>
                            </div>
                            <div className='row1 d-flex justify content-around'>
                                <div className='col-sm-2 img4'></div>
                                <div className='col-sm-2 img5'></div>
                                <div className='col-sm-2 img6'></div>
                                <div className='col-sm-2 img7'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Sales