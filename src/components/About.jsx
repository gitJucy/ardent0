import React ,{Component} from 'react'
class About extends Component {
    render() {
        return (
            <div className='container-fluid about-box'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-sm-5 abpic'>
                    </div>
                    <div className='col-sm-1 buffer'></div>
                    <div className='col-sm-5 wording-main'>
                            <h1>We are Ardent.</h1>
                            <p>Lorem ipsum dolor sit amet,
                                 et qui quis audiam deserunt, utinam ancillae ne sea. 
                                 Simul aliquam eum ei, natum solet quo te. 
                                 Odio error erroribus ad has, 
                                 nam at perpetua efficiantur.
                            </p>
                    </div>
                </div>
            </div>
        );
    }
}


export default About