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
                    <meta charset='utf-8'/>
                    <title>Material Handling Equipment-Savannah GA |Ardent Industrial Equipment </title>
                    <meta name='description' content='Ardent Industrial Equipment provides premier forklift sales of new and used equipment along with
                    rental programs, service and maintenance, parts, warranties, and financing options. Ardent takes pride
                    in providing the best possible services for our clients. Offering world class brands such as Clark, JLG, and
                    Cascade allow us to meet client needs efficiently.'/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="theme-color" content="#000000"/>
                    <meta name="google-site-verification" content="mbkAe5tudYu8225OWgUzF7W5cTsX2OPsTUtz0OkSdAk" />    
                </Helmet>
                <Landing/>
                <About/>
                <MenuBlock/>
            </div>
        );
    }
}


export default Home