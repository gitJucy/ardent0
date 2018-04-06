import React, {Component} from 'react'
import Social from '../components/Social'
class Footer extends Component{
    render(){
        return(
            <div className='footer container-fluid'>
                <div className='row justify-content-center align-items-end'>
                    <div className='col-xs-6 mr-auto addyul'>
                        <ul className='list-unstyled'>
                            <li class>Ardent Industrial Equipment</li>
                            <li class>114 Owens Industrial Drive</li>
                            <li class>Savannah GA 31405</li>
                            <li class>p:888-999-8066</li>
                            <li class>e: contact@ardentequipment.com</li>
                        </ul>
                    </div>
                    <div className='col-xs-6 ml-auto'>
                    <Social/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer