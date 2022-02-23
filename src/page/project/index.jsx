import React from 'react';
import {EndTitles, Progress} from "./styles";
import people1 from '../../assest/People-1.png'
import people2 from '../../assest/People-2.png'
import people3 from '../../assest/People-3.png'
import people4 from '../../assest/People-4.png'
import facebook from '../../assest/facebook.svg'
import mail from '../../assest/mail.svg'
import twitter from '../../assest/twitter.svg'
import quote from '../../assest/Vector.png'
import peopleQ1 from '../../assest/quote-1.png'
import peopleQ2 from '../../assest/quote-2.png'
import logo from '../../assest/logo-s.png'

function Project() {
    return (<>
        <Progress>
            <p className='team'>
                our team
            </p>
            <div className='hr'>

            </div>
            <div className='card-wraper'>
                <div className='card'>
                    <img src={people1}/>
                    <p className='name'>
                        Ron Swanson <br/>
                        <span>
                                founder
                            </span>
                    </p>
                    <div className='link'>
                        <img src={twitter}/>
                        <img src={facebook}/>
                        <img src={mail}/>
                    </div>
                </div>
                <div className='card'>
                    <img src={people2}/>
                    <p className='name'>
                        julia depish <br/>
                        <span>
                                marketing
                            </span>
                    </p>
                    <div className='link'>
                        <img src={twitter}/>
                        <img src={facebook}/>
                        <img src={mail}/>
                    </div>
                </div>
                <div className='card'>
                    <img src={people3}/>
                    <p className='name'>
                        danny devry <br/>
                        <span>
                                designer
                            </span>
                    </p>
                    <div className='link'>
                        <img src={twitter}/>
                        <img src={facebook}/>
                        <img src={mail}/>
                    </div>
                </div>
                <div className='card'>
                    <img src={people4}/>
                    <p className='name'>
                        lisa smith <br/>
                        <span>
                                developer
                            </span>
                    </p>
                    <div className='link'>
                        <img src={twitter}/>
                        <img src={facebook}/>
                        <img src={mail}/>
                    </div>
                </div>
            </div>
            <blockquote>
                <img className='quote'
                     src={quote}/>
                <div className='card-wrappers'>
                    <div>
                        <p className='title'>
                            “I love these guys! They did
                            a
                            great job. I would recommend
                             to anyone.”
                        </p>
                        <img src={peopleQ1}/>
                        <p className='names'>
                            Julius Von Uberstien
                        </p>
                    </div>
                    <hr/>
                    <div>
                        <p className='title'>
                            “Elexis Corp. has grown business
                            immensely with the help of
                            Minimal.”
                        </p>
                        <img src={peopleQ2}/>
                        <p className='names'>
                            Rachel Stamos
                        </p>
                    </div>
                </div>
            </blockquote>

        </Progress>
        <EndTitles>
            <input type='text' placeholder='Name'
                   className='name'/> <br/>
            <input type='email' className='email'
                   placeholder='Email'/> <br/>
            <input className='name' placeholder='Budget'
                   type='text'/> <br/>
            <textarea className='email'
                      placeholder='Describe you`re project'
                      rows={6} cols={57}/> <br/>
            <button className='send'>
                send message
            </button>
            <br/>
            <img className='logo' src={logo}/>
            <p style={{color:"rgba(255,255,255, 0.4)"}}>
                Minimal Template made in Webflow. All rights
                reserved.
            </p>
        </EndTitles>

    </>);
}

export default Project;