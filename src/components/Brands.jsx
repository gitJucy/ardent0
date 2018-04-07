import React, {Component} from 'react'
import {Carousel} from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

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
            width:'25vw',
        };
            return(
                <Carousel {...settings} >
                   <div>Toyota</div>
                   <div>Mitsubishi</div>
                   <div>Caterpillar</div>
                   <div>Hyster</div>
                   <div>Yale</div>
                   <div>Doosan</div>
                   <div>Daewoo</div>
                   <div>Linde</div>
                   <div>Baker</div>
                   <div>Barrett</div>
                   <div>Allis Chalmers</div>
                   <div>Crown</div>
                   <div>Raymond</div>
                   <div>Komatsu</div>
                   <div>Kalmar</div>
                   <div>TCM</div>

                </Carousel>
        );
    }
}
export default Brands