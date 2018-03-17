import React ,{Component} from 'react'
import fb from '../img/Facebook.svg'
import ig from '../img/Instagram.svg'
import twt from '../img/Twitter.svg'
class Social extends Component {
    render() {
        return (
            <div className='social-wrapper container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-sm buff'></div>
                    <div className='col-sm-1'><a href='#'><img src={fb} alt='facebook'/></a></div>
                    <div className='col-sm-1'><a href='#'><img src={ig} alt='instagram'/></a></div>
                    <div className='col-sm-1'><a href='#'><img src={twt} alt='twitter'/></a></div>
                    <div className='col-sm buff'></div>
                </div>
            </div>
        );
    }
}


export default Social