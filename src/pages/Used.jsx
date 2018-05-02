import React ,{Component} from 'react'
import {Helmet} from 'react-helmet'
import FinanceBlock from '../components/FinanceBlock'
import Badger from '../components/Badger'
import check from '../img/check.svg'
class Used extends Component {
    render() {
        return (
            <div className='sales content container-fluid'>
                <Helmet>
                    <meta charset='utf-8'/>
                    <title>Used Material Handling Equipment and Forklifts in Savannah GA</title>
                    <meta name='description' content='Ardent provides the highest quality used equipment regardless of brand.  No matter what your needs or price range, Ardent has the equipment that can get you working.'/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="theme-color" content="#000000"/>
                    <meta name="google-site-verification" content="mbkAe5tudYu8225OWgUzF7W5cTsX2OPsTUtz0OkSdAk" />    
                </Helmet>

                <div className='sales-wrapper'>
                <div className='headwrap row d-flex justify-conent-end align-items-center'><h1>Used Equipment</h1></div> 
                <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-sm '>
                            
                            <p className='finance-txt'><img id ='splash'src={check}/><hr/><div className='finance-txt1'>Ardent takes pride in providing the highest quality pre-owned equipment to our clients, regardless of brand. We take the time to find the right equipment for your needs for the right price. </div>
                            </p>
                        </div>
                        <div className='col-sm used-img'></div>
                        <div className='col-sm'>
                           <div className='sales-txt'><h2>The benefits of obtaining your used equipment with Ardent are:</h2><hr />
                            <div className='finance-txt1'><ul>
                            <li><p>Large selection of trade in, off lease, and reconditioned equipment.</p></li>
                            <li><p>Variety of brands, size, capacities, and fuel types to ensure the perfect fit at your facility.</p></li>
                            <li><p>Competitive financing, leasing, and rent to own options.</p></li>
                            </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                  <FinanceBlock />
                </div>
                <Badger />
            </div>
        );
    }
}


export default Used