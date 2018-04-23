import React, {Component} from 'react'
import fork0 from '../img/fork0.png'
import fork1 from'../img/fork1.png'
import fork2 from'../img/fork2.png'
import fork4 from'../img/fork4.png'
import fork5 from'../img/fork5.png'
import fork6 from'../img/fork6.png'
import fork7 from'../img/fork7.png'
import fork8 from'../img/fork8.png'
import fork9 from'../img/fork9.png'
import s25 from '../img/s25.pdf'
import c25c from '../img/c25c.pdf'
import cgc55 from '../img/cgc55.pdf'
import cgc70 from '../img/cgc70.pdf'
import c55 from '../img/c55.pdf'
import wpl25 from '../img/wpl25.pdf'

class SalesImage extends Component{
    render(){
        return(
            <div className='img-wrapper'>
                <h1>Clark Product Spotlight</h1><hr/>
                <div className ='row'>
            <div className='col col-sm-3 featured-img'></div>
            <div className='col-sm-9'>
                <div className='row0 d-flex justify-content-center align-items-center'>
                    <a href={s25}><img className='col-sm-3 img0' src={fork8}/></a>
                    <a href={c25c}><img className='col-sm-3 img0'src={fork0}/></a>
                    <a href={cgc55}><img className='col-sm-3 img0'src={fork2}/></a>
                </div>
                <div className='row1 d-flex justify-content-center align-items-center'>
                    <a href={cgc70}><img className='col-sm-3 img0'src={fork9}/></a>
                    <a href={c55}><img className='col-sm-3 img0'src={fork5}/></a>
                    <a href={wpl25}><img className='col-sm-3 img1'src={fork6}/></a>
                </div>
            </div>
        </div>
        </div>
        );
    }
}
export default SalesImage