import React, {Component} from 'react'
import clark from '../img/brands/clark.svg'
import fork0 from '../img/fork0.png'
import fork1 from'../img/fork1.png'
import fork2 from'../img/fork2.png'
import fork4 from'../img/fork4.png'
import fork5 from'../img/fork5.png'
import fork6 from'../img/fork6.png'
import fork7 from'../img/fork7.png'
import fork8 from'../img/fork8.png'
import fork9 from'../img/fork9.png'
import s25 from '../img/s25.jpg'
import s25p from '../img/s25p.jpg'
import cgc55 from '../img/cgc55.jpg'
import cgc70 from '../img/cgc70.jpg'
import c55 from '../img/c55.jpg'
import c80 from '../img/c80.jpg'

class SalesImage extends Component{
    render(){
        return(
            <div id='sales-img-header'className='row img-wrapper'>
                <h1 style={{color:'white'}}><a href='https://www.clarkmhc.com'><img src={clark}/></a> Product Spotlight</h1>
            <div className='col col-sm-3 featured-img'></div>
            <div className='col-sm-9'>
                <div className='row0 d-flex justify-content-center align-items-center'>
                    <a href={s25}target='_blank'><img className='col-sm-3 img0' src={fork8}/><p style={{color:'rgb(255,255,255)',textDecoration:'none'}}>S 20/25/30/35</p></a>
                    <a href={s25p}target='_blank'><img className='col-sm-3 img0'src={fork0}/><p style={{color:'rgb(255,255,255)',textDecoration:'none'}}>S 20/25/30/35 IC-Pneumatic</p></a>
                    <a href={cgc55}target='_blank'><img className='col-sm-3 img0'src={fork2}/><p style={{color:'rgb(255,255,255)',textDecoration:'none'}}>CGC 40/50/55</p></a>
                </div>
                <div className='row1 d-flex justify-content-center align-items-center'>
                    <a href={cgc70}target='_blank'><img className='col-sm-3 img0'src={fork9}/><p style={{color:'rgb(255,255,255)',textDecoration:'none'}}>CGC 60/70</p></a>
                    <a href={c55}target='_blank'><img className='col-sm-3 img0'src={fork5}/><p style={{color:'rgb(255,255,255)',textDecoration:'none'}}>C 40/45/50s/55s</p></a>
                    <a href={c80}target='_blank'><img className='col-sm-3 img0'src={fork6}/><p style={{color:'rgb(255,255,255)',textDecoration:'none'}}>C 60/70/75/80</p></a>
                </div>
            </div>
        </div>
        );
    }
}
export default SalesImage