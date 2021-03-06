import React, {Component} from 'react'
import {Carousel} from 'react-responsive-carousel'
import fork0 from '../img/fork0.png'
import fork1 from'../img/fork1.png'
import fork2 from'../img/fork2.png'
import fork4 from'../img/fork4.png'
import fork5 from'../img/fork5.png'
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
                   <img alt="" src={fork0}/>
                   <img alt="" src={fork1}/>
                   <img alt="" src={fork2}/>
                   <img alt="" src={fork4}/>
                   <img alt="" src={fork5}/>
                   <img alt="" src={fork7}/>
                   <img alt="" src={fork8}/>
                   <img alt="" src={fork9}/>
                  
                </Carousel>
        );
    }
}
export default SaleSlide