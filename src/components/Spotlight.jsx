import React, {Component} from 'react'

class Spotlight extends Component{
    render(){
        return(
            <div className='spotlight row d-flex justify-content-center align-items-center'>
                <div className='container-fluid'><h2>Equipment Spotlight</h2></div><br/>
                <ul className='list-inline list-unstyled'>
                    <a href='#'><li className='list-inline-item'>S25L</li></a>
                    <a href='#'><li className='list-inline-item'>S25C</li></a>
                    <a href='#'><li className='list-inline-item'>CGC55</li></a>
                    <a href='#'><li className='list-inline-item'>CGC70</li></a>
                    <a href='#'><li className='list-inline-item'>C55</li></a>
                    <a href='#'><li className='list-inline-item'>WPL25</li></a>
                </ul>
            </div>
        );
    }
}
export default Spotlight