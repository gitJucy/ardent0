import React, {Component} from 'react'
import {Carousel} from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import fork0 from '../img/fork0.png'
import fork1 from'../img/fork1.png'
import fork2 from'../img/fork2.png'
import fork4 from'../img/fork4.png'
import fork5 from'../img/fork5.png'
import fork6 from'../img/fork6.png'
import fork7 from'../img/fork7.png'
import fork8 from'../img/fork8.png'
import fork9 from'../img/fork9.png'
class SaleSlide extends Component{
    render(){
        let settings={
            showThumbs:false,
            showArrows:false,
            showIndicators:false,
            showStatus:false,
            infiniteLoop:true,
            autoPlay:true,
            interval:'3000',
            stopOnHover:false
        };
            return(
                <Carousel {...settings} >
                   <img src={fork0}/>
                   <img src={fork1}/>
                   <img src={fork2}/>
                  
                   <img src={fork4}/>
                   <img src={fork5}/>
                   <img src={fork6}/>
                   <img src={fork7}/>
                   <img src={fork8}/>
                   <img src={fork9}/>
                  
                </Carousel>
        );
    }
}
export default SaleSlide