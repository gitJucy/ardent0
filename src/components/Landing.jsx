import React ,{Component} from 'react'
import Heading from '../components/Heading'

class Landing extends Component {
    render() {
        return (
            <div className='landing container-fluid d-flex justify-content-center align-items-center'>
                <Heading/>
            </div>
        );
    }
}


export default Landing