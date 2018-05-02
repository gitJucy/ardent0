import React ,{Component} from 'react'
import link from '../img/Linkedin.svg'
import ig from '../img/Instagram.svg'
class Social extends Component {
    render() {
        return (
            <div className='container-fluid navbuttons'>
                <h2>Follow Us On Social Media</h2>
                <div className='d-flex justify-content-center'>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/company/ardent-industrial-equipment/"><img src={link}alt='Linked In'/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.instagram.com/ardentindustrialequipment"><img src={ig} alt='instagram'/></a>
                        </li>
                    </ul>
                </div>
                <p>&copy; 2018 Ardent</p>

            </div>
        );
    }
}


export default Social