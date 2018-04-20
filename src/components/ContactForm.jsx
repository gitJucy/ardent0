import React,{Component} from 'react'

class ContactForm extends Component{
    render(){
        return(
        <div className='col-sm contact contform'>
            <form method='POST' action='https://formspree.io/kirk@ardentequipment.com'>
                <h2 id='pop'>Send us a message.</h2><hr/>
            <div className="form-group">
                <label for="nameInput">Name</label>
                <input type="Name" name='name'className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" required/>
            </div>
            <div className="form-group">
                <label  for="emailInput">E-Mail</label>
                <input type="email" name='e-mail'className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="someone@example.com" required/>
            </div>
            <div className="form-group">
                <label  for="inputPhone">Phone</label>
                <input type="tel" name='phone'className="form-control"  aria-describedby="emailHelp" placeholder="123-456-7890"required/>
            </div>
            <div className="form-group">
                <label  for="exampleFormControlTextarea1">Message</label>
                <textarea name='message'className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder='How can we help you?'required></textarea>
            </div>
            
               <button type='submit'id='formsub'className='btn'>Submit</button>
            </form>
       
        </div>

        );
    }
}
export default ContactForm