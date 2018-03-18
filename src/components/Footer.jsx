import React, {Component} from 'react'
class Footer extends Component{
    render(){
        return(
            <div className='footer container-fluid'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-xs-6 mr-auto'>
                        <ul className='list-unstyled'>
                            <li class>Ardent Industrial Equipment</li>
                            <li class>123 Forklift Drive</li>
                            <li class>Savannah GA 31322</li>
                            <li class>p:(123)456-7890</li>
                            <li class>e:KChastain@ardentie.com</li>
                        </ul>
                    </div>
                    <div className='col-xs-6 ml-auto'>
                        <p>all content &copy; ardent 2018</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer