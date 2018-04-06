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
                            <p>Ardent Industrial Equipment is 
                            passionate about serving you 
                            efficiently and simply.  Our 
                            customers want a seamless, painless 
                            process that ensures maximum uptime 
                            for your material handling equipment, 
                            and it is our mission to provide that 
                            service. The purpose and pride that we 
                            find in fulfilling your every question
                            and challenge drives our desire to be
                            the best in our business. Through 
                            integrity in all we do, compassion 
                            for our clients, and constantly evolving 
                            methods and avenues of improvement, we are 
                            ready to serve you now and in the future. 
                            </p>
                    </div>
                </div>
            </div>
        );
    }
}


export default About