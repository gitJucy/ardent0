import React, {Component} from 'react'
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

                        <div className='col-sm contact contform'>
                            <form method='POST' action='https://formspree.io/johnrlucy84@gmail.com'>
                                <span id='pop'>Send us a message.</span><hr/>
                            <div className="form-group">
                                <label className='sr-only' for="nameInput"></label>
                                <input type="Name" name='name'className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <label classname='sr-only' for="emailInput"></label>
                                <input type="email" name='e-mail'className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label className='sr-only' for="inputPhone"></label>
                                <input type="phone-number" name='phone'className="form-control"  aria-describedby="emailHelp" placeholder="Phone Number"/>
                            </div>
                            <div className="form-group">
                                <label className='sr-only' for="exampleFormControlTextarea1"></label>
                                <textarea name='message'className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='What can we help you with?'></textarea>
                            </div>
                            <div className="form-row align-items-center">
                                
                                <label className="mr-sm-2" for="whenshouldwecall"></label>
                                <select name='call-time'className="custom-select " id="inlineFormCustomSelect">
                                    <option selected>Best Time To Call?</option>
                                    <option value="am">Start of Business Day</option>
                                    <option value="pm">Afternoon</option>
                                    <option value="evening">End of Business Hours</option>
                                </select>
                                </div>
                               <button type='submit'id='formsub'className='btn'>Submit</button>
                            </form>
                       
                        </div>
                        <div className='col-sm contact contact-text sales-txt'>
                        <span id='pop'>Location</span><hr/>

                            <div>
                            <iframe id='contactmap'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.547337746256!2d-81.12877728426386!3d32.05444178119627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fb9fd1bdde32e5%3A0x6754f00ab029b4f6!2s114+Owens+Industrial%2C+Savannah%2C+GA+31405!5e0!3m2!1sen!2sus!4v1523409085074"></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Contact