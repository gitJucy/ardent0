import React ,{Component} from 'react'
import About from '../components/About'
import Landing from '../components/Landing'
import Social from '../components/Social'
class Home extends Component {
    render() {
        return (
            <div className='main container-fluid'>
                <Landing/>
                <About/>
                
                <Social/>
            </div>
        );
    }
}


export default Home