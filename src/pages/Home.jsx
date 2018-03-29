import React ,{Component} from 'react'
import About from '../components/About'
import Landing from '../components/Landing'
import MenuBlock from '../components/MenuBlocks'

class Home extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Landing/>
                <About/>
                <MenuBlock/>
            </div>
        );
    }
}


export default Home