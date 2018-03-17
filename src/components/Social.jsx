import React ,{Component} from 'react'
import fb from '../img/Facebook.svg'
import ig from '../img/Instagram.svg'
import twt from '../img/Twitter.svg'
class Social extends Component {
    render() {
        return (
            <div className='container-fluid social-wrapper'>
                <div className='d-flex justify-content-center'>
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#"><img src={fb}alt='facebook'/></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><img src={ig} alt='instagram'/></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><img src={twt} alt='twitter'/></a>
                        </li>
                    </ul>
                </div>

               
            </div>
        );
    }
}


export default Social