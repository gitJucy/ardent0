import React ,{Component} from 'react'
class About extends Component {
    render() {
        return (
            <div className='container-fluid about-box'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-sm-1 buffer'></div>
                    <div className='col-sm-12 wording-main'>
                            <p><span id='pop'>Ardent </span>Industrial Equipment is 
                            <span id='pop'> Passionate</span> about serving you 
                            efficiently and simply.  Our 
                            customers want a seamless, painless 
                            process that ensures maximum uptime 
                            for your material handling equipment, 
                            and it is <span id='pop'>Our Mission</span> to provide that 
                            service. The purpose and pride that we 
                            find in fulfilling your every question
                            and challenge drives our desire to be
                            <span id='pop'> The Best</span> in our business. Through 
                            <span id='pop'> Integrity</span> in all we do, <span id='pop'> Compassion </span> 
                            for our clients, and constantly evolving 
                            methods and avenues of improvement, <span id='pop'><br/>We Are 
                            Ready to Serve You Now and in the Future. </span>
                            </p>
                    </div>
                </div>
            </div>
        );
    }
}


export default About