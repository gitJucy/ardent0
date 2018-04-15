import React, {Component} from 'react'
import ContactForm from '../components/ContactForm'
import mail from '../img/email.svg'
import clock from '../img/clock.svg'
import phone from '../img/contactphone.svg'

class Contact extends Component{
    render(){
        return(
            <div className='sales content container-fluid '>
                <div className='sales-wrapper'>
                <div className='headwrap row d-flex justify-conent-end align-items-center'><h1>Contact Us</h1></div> 
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-sm contact contact-text sales-txt '>
                            <span><img id='contact-img'src={clock}/></span><hr/>
                            <p>Mon-Fri: <span id='pop'>9am-5pm</span></p>
                            <span><img id='contact-img'src={phone}/></span><hr/>
                            <p>Call us: <span id='pop'><a href='tel:1+888-999-8066'>(888) 999-8066</a></span></p>
                            <span><img id='contact-img'src={mail}/></span><hr/>

                            <p>E-Mail: <span id='pop1'>contact@ardentequipment.com</span></p>
                        </div>
                        <ContactForm/>
                        <div className='col-sm contact contact-text sales-txt'>
                        <span id='pop'>Location</span><hr/>

                            <div>
                            <iframe id='contactmap'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.547337746256!2d-81.12877728426386!3d32.05444178119627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fb9fd1bdde32e5%3A0x6754f00ab029b4f6!2s114+Owens+Industrial%2C+Savannah%2C+GA+31405!5e0!3m2!1sen!2sus!4v1523409085074"></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default Contact