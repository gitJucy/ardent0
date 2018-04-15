import React,{Component} from 'react'

class ContactForm extends Component{
    render(){
        return(
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

        );
    }
}
export default ContactForm