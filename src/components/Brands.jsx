import React, {Component} from 'react'
import {Carousel} from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
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
            showThumbs:false,
            showArrows:false,
            showIndicators:false,
            showStatus:false,
            infiniteLoop:true,
            autoPlay:true,
            interval:'2000',
            width:'10vh',
            dynamicHeight:true,
        };
            return(
                <Carousel {...settings}>
                   <img src={clark}/>
                   <img src={crown}/>
                   <img src={hangcha}/>
                   <img src={heli}/>
                   <img src={hyster}/>
                   <img src={kion}/>
                   <img src={komatsu}/>
                   <img src={mitsu}/>
                   <img src={toyota}/>
                   <img src={uni}/>
                </Carousel>
        );
    }
}
export default Brands