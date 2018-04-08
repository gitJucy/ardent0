import React ,{Component} from 'react'
import FinanceBlock from '../components/FinanceBlock'
class Used extends Component {
    render() {
        return (
            <div className='content container-fluid'>
                <div className='sales-wrapper'>
                    <h1>Used Equipment</h1>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-sm '>
                            <p className='sales-txt'>Ardent takes pride in providing the highest quality pre-owned equipment to our clients, regardless of brand. We take the time to find the right equipment for your needs for the right price. 
                            </p>
                        </div>
                        <div className='col-sm used-img'></div>
                        <div className='col-sm'>
                           <p className='sales-txt'>The benefits of obtaining your used equipment with Ardent are:<br/>
                            <ul>
                            <li>Large selection of trade in, off lease, and reconditioned equipment.</li>
                            <li>Variety of brands, size, capacities, and fuel types to ensure the perfect fit at your facility.</li>
                            <li>Competitive financing, leasing, and rent to own options.</li>
                            </ul>
                            </p>
                        </div>
                    </div>
                  <FinanceBlock />
                </div>
            </div>
        );
    }
}


export default Used