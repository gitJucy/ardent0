import React ,{Component} from 'react'
import {Helmet} from 'react-helmet'
import ss from '../img/brands/S-Series.png'
import FinanceBlock from '../components/FinanceBlock'
import clark from '../img/brands/clark.svg'
import jlg from '../img/brands/jlg.png'
import cascade from '../img/brands/cascadelogo.png'
import brand from '../img/brand.svg'
import badge from '../img/badge.png'
import Badger from '../components/Badger'
import SaleSlide from '../components/SaleSlider'
import SalesImage from '../components/SalesImage'


class Sales extends Component {
    render() {
        return (
            <div className='sales content container-fluid'>
                <Helmet>
                    <title>New Equipment dealer in Savannah GA featuring Clark Forklifts, JLGs full line and Cascade Attachments</title>
                    <meta name='description' content=' Clark forklifts ranging from 3,000 to 18,000 pounds, JLG’s full line, and Cascade’s renowned attachments allow us to fill your material handling needs.
                    Ardent of Savannah Georgia provides preventative maintenance, total maintenance, and all warranty services to ensure keeping your material handling equipment optimal and running efficiently is easy.'/>
                </Helmet>
                <div className='sales-wrapper'>
                <div className='headwrap row d-flex justify-conent-end align-items-center'><h1>New Equipment</h1></div> 
                <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-sm '>
                            <p className='finance-txt'><img id='badge' src={badge}/><hr/>
                            Clark forklifts ranging from 3,000 to 18,000 pounds, JLG’s full line, and Cascade’s renowned attachments allow us to fill your material handling needs.<hr/>
                            Ardent provides preventative maintenance, total maintenance, and all warranty services to ensure keeping your equipment optimal and running efficiently is easy.<hr/>
                            Your experience before, during and after your purchase is our focus. We will lift with you for years to come.
                            </p>
                        </div>
                        <div className='col-sm sales-img'> 
                            <SaleSlide/>
                        </div>
                       
                        <div className='col-sm'>
                           <p className='finance-txt'>
                               <img id='splash' src={brand}/><hr/>
                            <img id ='clarklogo'src={clark}/> – The original inventor of the forklift has now reinvented themselves with cutting edge equipment to meet every need and has the support infrastructure to keep you running. <hr/>
                            <img id ='clarklogo'src={jlg}/> – As the world’s leading designer and manufacturer of access equipment, JLG helps us go above and beyond to support our clients.  <hr/>
                            <img id ='clarklogo'src={cascade}/> – A global leader in the design, manufacture and marketing of materials handling equipment and related technologies, Cascade products reliably get the job done, whatever that job may be. 
                            </p>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-center'id='s-series'>
                    <h3>We have the new <img id='ss'src={ss}/> from <img id ='clarklogo' src={clark}/> in stock and ready to work!</h3>
                    </div>
                    <SalesImage/>
                    <FinanceBlock />
                </div>
                <Badger />
            </div>
        );
    }
}


export default Sales