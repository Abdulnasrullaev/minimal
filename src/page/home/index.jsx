import React from 'react';
import {Brands, HomePage, Images, Navbar} from "./style";
import logo from '../../assest/Logo.png'
import thing1 from '../../assest/thing-1.png'
import thing2 from '../../assest/thing-2.png'
import thing3 from '../../assest/thing-3.png'
import photo1 from '../../assest/Photo-1.png'
import photo2 from '../../assest/Photo-2.png'
import photo3 from '../../assest/Photo-3.png'
import photo4 from '../../assest/Photo-4.png'
import photo5 from '../../assest/Photo-5.png'
import photo6 from '../../assest/Photo-6.png'
import photo7 from '../../assest/Photo-7.png'
import photo8 from '../../assest/Photo-8.png'
import photo9 from '../../assest/Photo-9.png'

function Home() {
    return (
        <>
            <Navbar>
                <img src={logo}/>
                <nav>
                    <li><a href='#'>progress</a></li>
                    <li><a href='#'>projects</a></li>
                    <li><a href='#'>team</a></li>
                    <li><a href='#'>contact</a></li>
                </nav>
            </Navbar>
            <HomePage>
                <p className='brand'>
                    Making brands stand out <br/>
                    is our obsession
                </p>
                <div className='hr'>

                </div>
                <p className='let'>
                    Let us help your brand stand out.
                </p>
                <div className='minimal'>
                    <p>
                        Minimalist is a full-service digital
                        creative agency located in Ontorio
                        Canada. We focus on design,
                        consulting, <br/> technology, and
                        photography. We’ve been building
                        unique digital products, platforms,
                        and experiences for the past 6 <br/>
                        years. Let us help your company
                        grow.
                    </p>
                    <button>
                        get in touch
                    </button>
                </div>
            </HomePage>
            <Brands>
                <p className='make'>
                    how we make brands thrive
                </p>
                <div className='hr'>

                </div>
                <div className='cards-wrapper'>
                    <div className='cards'>
                        <img src={thing1}/>
                        <p className='set'>
                            SET a target
                        </p>
                        <p className='lorem'>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Suspendisse varius enim in eros
                            elementum tristique.
                        </p>
                    </div>
                    <div className='cards'>
                        <img src={thing2}/>
                        <p className='set'>
                            design a solution
                        </p>
                        <p className='lorem'>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Suspendisse varius enim in eros
                            elementum tristique.
                        </p>
                    </div>
                    <div className='cards'>
                        <img src={thing3}/>
                        <p className='set'>
                            track the progress
                        </p>
                        <p className='lorem'>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Suspendisse varius enim in eros
                            elementum tristique.
                        </p>
                    </div>
                </div>
            </Brands>
            <Images>
                <p className='recent'>
                    recent projects
                </p>
                <div className='hr'>

                </div>
                <div className='img-wrapper'>
                    <div className='img-s'>
                        <img src={photo1}/>
                        <p>
                            woods <br/>
                            <span>photography</span>
                        </p>
                    </div>
                    <div className='img-s'>
                        <img src={photo2}/>
                        <p>
                            path <br/>
                            <span>website photography</span>
                        </p>
                    </div>
                    <div className='img-s'>
                        <img src={photo3}/>
                        <p>
                            darkness <br/>
                            <span>website</span>
                        </p>
                    </div>
                    <div className='img-s'>
                        <img src={photo4}/>
                        <p>
                            waves <br/>
                            <span>photography</span>
                        </p>
                    </div>
                    <div className='img-s'>
                        <img src={photo5}/>
                        <p>
                            drops<br/>
                            <span>website</span>
                        </p>
                    </div>
                    <div className='img-s'>
                        <img src={photo6}/>
                        <p>
                            ocean <br/>
                            <span>website</span>
                        </p>
                    </div>
                    <div className='img-s'>
                        <img src={photo7}/>
                        <p>
                            town <br/>
                            <span>website</span>
                        </p>
                    </div>
                    <div className='img-s'>
                        <img src={photo8}/>
                        <p>
                           mountain<br/>
                            <span>website</span>
                        </p>
                    </div>
                    <div className='img-s'>
                        <img src={photo9}/>
                        <p>
                            camera <br/>
                            <span>website</span>
                        </p>
                    </div>
                </div>
            </Images>
        </>
    )
}

export default Home