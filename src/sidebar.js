import './sidebar.css'
import React, {Component} from 'react';
import img from './assets/unnamed.jpg'
import calc from './assets/calc.png'
import garage from './assets/garage.png'
import home from './assets/home.png'
import racers from './assets/racers.png'
import service from './assets/service.png'
import setting from './assets/setting.png'
import killua from './assets/killua.jpeg'
import down from './assets/down.png'

class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    {/*top*/}
                    <div className='top'>
                        <div><img src={img} alt='logo' className='logo'/></div>
                        <h1 className='iffee'>iffee</h1>
                    </div>

                    {/*center*/}
                    <div className='center'>
                        <a href='#' id='menu' className='elem'>Menu</a>
                        <div className='elem Home'>
                            <img src={home} className='img home-1'/>
                            <div>Home</div>
                        </div>
                        <div className='elem Garage'>
                            <img src={garage} className='img garage-1'/>
                            <div>Garage</div>
                        </div>
                        <div className='elem Service'>
                            <img src={service} className='img service-1'/>
                            <div>Service Menu</div>
                        </div>
                        <div className='elem Racers'>
                            <img src={racers} className='img racers-1'/>
                            <div>Racers</div>
                        </div>
                        <div className='elem Calculator'>
                            <img src={calc} className='img calc'/>
                            <div>Calculator</div>
                        </div>
                        <div className='elem Setting'>
                            <img src={setting} className='img settings'/>
                            <div>Settings</div>
                        </div>
                    </div>
                    {/*bottom*/}
                    <div className='bottom'>
                        <h1 className='scheduled'>Scheduled Races</h1>
                        <div id='moto'>
                            <div className='ellipse'></div>
                            <div className="motogp">MotoGP 2022</div>
                        </div>
                        <div id='dynamic'>
                            <div className='ellipse2'></div>
                            <div className="dynamics">Dynamics 22</div>
                        </div>
                        <div id='olympic'>
                            <div className='ellipse3'></div>
                            <div className="olympics">Olymipcs</div>
                        </div>
                    </div>
                    <div className='footer'>
                        <img src={killua} className='killua'/>
                        <h1 className='kill'>Killua</h1>
                        <img src={down} className='footer-icon'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;