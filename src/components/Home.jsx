import React ,{Component} from 'react'
import bg from '../img/bg.png'
class Home extends Component {
    render() {
        return (
            <div className='homewrap container-fluid'>
                <img src={bg} alt='ardent logo' id='bg'/>
                <h1>ARDENT</h1>
            </div>
        );
    }
}


export default Home