import React, {Component} from 'react'
import Slider from 'react-slick'
import clark from '../img/brands/clark.png'
import crown from '../img/brands/crown.png'
import hangcha from '../img/brands/hangcha.png'
import heli from '../img/brands/heli.png'
import hyster from '../img/brands/hyster.png'
import kion from '../img/brands/kion.png'
import komatsu from '../img/brands/komatsu.png'
import mitsu from '../img/brands/mitsubishi.png'
import toyota from '../img/brands/toyota.png'
import uni from '../img/brands/unicarrier.png'

class Brands extends Component{
    render(){
        let settings={
            autoplay:true,
            dots: false,
            infinite: true,
            speed: 800,
            slidesToShow:4,
            arrows:false,
            centerMode: true,
            responsive:[
                {
                    breakpoint:768, settings:{slidesToShow:1}
                }
            ],
         };
        return(
            <div classname='container-fluid'>
                <h2>We proudly carry these top brands</h2><br/><br/>
                <Slider {...settings} className='container-fluid'>
                    <div className='slide'><img src={clark}/></div>
                    <div className='slide'><img src={crown}/></div>
                    <div className='slide'><img src={hangcha}/></div>
                    <div className='slide'><img src={heli}/></div>
                    <div className='slide'><img src={hyster}/></div>
                    <div className='slide'><img src={kion}/></div>
                    <div className='slide'><img src={komatsu}/></div>
                    <div className='slide'><img src={mitsu}/></div>
                    <div className='slide'><img src={toyota}/></div>
                    <div className='slide'><img src={uni}/></div>
                </Slider>
            </div>
        );
    }
}
export default Brands