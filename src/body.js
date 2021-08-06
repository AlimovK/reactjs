import React, {Component} from 'react';
import './body.css'
import left from './assets/left.png'
import right from './assets/right.png'
import car from './assets/Car .png'
import cat from './assets/cat icon.png'
import moon from './assets/moon icon.png'
import vector from './assets/Vector.png'


class Body extends Component {
    render() {
        return (
            <div className='main-body'>
                <div className='infiniti'>
                    <div className='renailt-icon'>
                        <div className='text'>Infitini Renault <span className='span'>TM</span> </div>
                        <div id='icon'>
                            <img src={left} className='left-icon' />
                            <img src={right} className='right-icon'/>
                        </div>
                    </div>
                    <img src={car} id='car-r'/>
                </div>
                <div className='mini'>
                    <div className='champion'>
                        <div className='cat-icon'> <img src={cat}/></div>
                        <div className='championship'><span className='num-72'>72</span> <br/>Championship</div>
                    </div>
                    <div className='skins'>
                        <div className='moon-icon'><img src={moon}/></div>
                        <div className='skin-name'><span id='num-32'>32</span> <br/> Skins</div>
                    </div>
                    <div className='won'>
                        <div className='vec'> <img src={vector}/></div>
                        <div className='trop'><span id='num-64'>64</span> <br/> Trophies won</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;