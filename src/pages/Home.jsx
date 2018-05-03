import React ,{Component} from 'react'
import {Helmet} from 'react-helmet'
import About from '../components/About'
import Landing from '../components/Landing'
import MenuBlock from '../components/MenuBlocks'

class Home extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Material Handling Equipment-Savannah GA |Ardent Industrial Equipment </title>
                    <meta name='description' content='Ardent Industrial Equipment provides premier forklift sales of new and used equipment along with
                    rental programs, service and maintenance, parts, warranties, and financing options. Ardent takes pride
                    in providing the best possible services for our clients. Offering world class brands such as Clark, JLG, and
                    Cascade allow us to meet client needs efficiently.'/>
                </Helmet>
                <Landing/>
                <About/>
                <MenuBlock/>
            </div>
        );
    }
}


export default Home