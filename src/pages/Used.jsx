import React ,{Component} from 'react'
import FinanceBlock from '../components/FinanceBlock'
import Badger from '../components/Badger'
import check from '../img/check.svg'
class Used extends Component {
    render() {
        return (
            <div className='sales content container-fluid'>
                <div className='sales-wrapper'>
                <div className='headwrap row d-flex justify-conent-end align-items-center'><h1>Used Equipment</h1></div> 
                <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-sm '>
                            
                            <p className='sales-txt'><img id ='splash'src={check}/><hr/>Ardent takes pride in providing the highest quality pre-owned equipment to our clients, regardless of brand. We take the time to find the right equipment for your needs for the right price. 
                            </p>
                        </div>
                        <div className='col-sm used-img'></div>
                        <div className='col-sm'>
                           <p className='sales-txt'>The benefits of obtaining your used equipment with Ardent are:<hr />
                            <ul>
                            <li>Large selection of trade in, off lease, and reconditioned equipment.</li><hr />
                            <li>Variety of brands, size, capacities, and fuel types to ensure the perfect fit at your facility.</li><hr />
                            <li>Competitive financing, leasing, and rent to own options.</li>
                            </ul>
                            </p>
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