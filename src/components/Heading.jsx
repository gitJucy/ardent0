import React, {Component} from 'react'
import Fade from 'react-reveal/Fade'
class Heading extends Component{
    render(){
        return(
            <div className='heading-anim d-flex align-items-center justify-content-center'>
                <Fade duration={200} delay={2000}>
                    <h2>Efficiency</h2>
                </Fade>
                <Fade duration={200} delay={3000}>
                    <h2>Evolved</h2>
                </Fade>
                <Fade duration={250} delay={4000}>
                    <h3>&trade;</h3>
                </Fade>

            </div>
        )
    }
}
export default Heading
