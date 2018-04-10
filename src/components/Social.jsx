import React ,{Component} from 'react'
import link from '../img/Linkedin.svg'
import ig from '../img/Instagram.svg'
class Social extends Component {
    render() {
        return (
            <div className='container-fluid navbuttons'>
                <h2>Follow Us On Social Media</h2>
                <div className='d-flex justify-content-center'>
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#"><img src={link}alt='Linked In'/></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><img src={ig} alt='instagram'/></a>
                        </li>
                    </ul>
                </div>
                <p>&copy; 2018 Ardent</p>

            </div>
        );
    }
}


export default Social