import React ,{Component} from 'react'
import ss from '../img/brands/images.png'
class Sales extends Component {
    render() {
        return (
            <div className='content container-fluid'>
                <div className='sales-wrapper'>
                    <h1>Sales</h1>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-sm '>
                            <p className='sales-txt'>Lorem ipsum dolor sit amet, mel prompta corrumpit te, aeque habemus principes vis in, soluta scriptorem at vim. Eam tamquam repudiare mediocritatem ei. Omittam detracto eu ius. Sale graece nam ei, eam ex ferri epicuri. Detracto sententiae ullamcorper qui ut, stet clita adversarium in vis, no ius unum debitis tractatos.</p>
                        </div>
                        <div className='col-sm sales-img'></div>
                        <div className='col-sm'>
                           <p className='sales-txt'>In tollit nonumes vis, sumo lobortis per ex. Ne diam saperet usu, et vix laudem signiferumque. Tamquam persecuti qui an. Te eam dolorem iudicabit necessitatibus, no ponderum interpretaris mel, nec ut essent comprehensam. </p>
                        </div>
                    </div>
                    <div className='container-fluid brand-slide'>
                    </div>
                    <h3>We have the new <img src={ss}/> from Clark in stock and ready to demo!</h3>
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