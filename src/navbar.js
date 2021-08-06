import React, {Component} from 'react';
import './navbar.css'
import search from './assets/search.png'
import down from './assets/down.png'
import bell from './assets/bell.png'
import user from './assets/user.png'
import killu from './assets/killua.jpeg'
import start from './assets/key.png'
import drive from './assets/drive.png'
import maintin from './assets/maintin.png'
import battery from './assets/battery.png'
import tires from './assets/tires.png'
import lock from './assets/lock.png'


class Navbar extends Component {
    render() {
        return (
            <div>
            <div className='content'>
                <div className='left'>
                    <img src={search} className='search'/>
                    <input type='text' id='input-left' placeholder='Search for a race, car or racer '/>
                </div>
                <div className='middle'>
                    <input placeholder='Choose a car' id='car'/>
                    <img src={down} className='go-down'/>
                </div>
                <div className='right'>
                    <img src={bell} className='bell'/>
                    <img src={user} className='user'/>
                    <img src={killu} className='killu'/>
                </div>
            </div>

                {/*content-2*/}
                <div className='content-2'>
                    <div className='start'>
                        <img src={start} className='img-1'/>
                        {this.props.startes}</div>
                    <div className='start'>
                        <img src={drive} className='img-1'/>
                        {this.props.drive}</div>
                    <div className='start'>
                        <img src={maintin} className='img-1'/>
                        {this.props.maintin}</div>
                    <div className='start'>
                        <img src={battery} className='img-1'/>
                        {this.props.battery}</div>
                    <div className='start'>
                        <img src={tires} className='img-1'/>
                        {this.props.tires}</div>
                    <div className='start'>
                        <img src={lock} className='img-1'/>
                        {this.props.loced}</div>
                </div>
            </div>
        );
    }
}

export default Navbar;