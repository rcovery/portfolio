import React from 'react';
import './App.css';
import pic from './assets/profile_pic.jpg';
import Repo from './components/project';
import FormEmail from './components/sendmail';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

// IMPORT AOS
import "./libs/aos.css";
import AOS from 'aos';

function ContactIcon(){
    return(
        <div className="contactSvg">
            <a rel="noreferrer" target="_blank" href="https://github.com/rcovery"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rcovery"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></a>
            <a rel="noreferrer" target="_blank" href="https://t.me/ryandotdat"><svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/></svg></a>
            <a href="mailto:ryancpereira@protonmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg></a>
        </div>
    )
}

function App(){
    AOS.init();
    return (
        <main>
            <div className="block one">
                <img loading="lazy" data-aos="fade-down" data-aos-duration="1000" id="pic" alt="It's me" src={pic}></img>

                <div><p data-aos="zoom-out" data-aos-duration="1000" className="title">Lorem I. Ipsum</p>
                <p className="normal">Normal <span className="green">text</span> -- <span className="pink">highlight</span></p></div>

                <div className="separator">
                    <p className="subtitle">Skills</p>
                    <Splide options={{
                        type: 'loop',
                        perPage: 2.2,
                        gap: '2rem',
                        pagination: false
                    }}>
                        <SplideSlide>
                            <img alt="skill" className="skillImg" src={pic}></img>
                            <p>Aaaaa</p>
                        </SplideSlide>
                        <SplideSlide>
                            <img alt="skill" className="skillImg" src={pic}></img>
                            <p>Aaaaa</p>
                        </SplideSlide>
                        <SplideSlide>
                            <img alt="skill" className="skillImg" src={pic}></img>
                            <p>Aaaaa</p>
                        </SplideSlide>
                    </Splide>
                </div>

                <ContactIcon />
            </div>
            <div className="second">
                <div className="infoArea">
                    <div className="card">
                        <br />
                        <p className="subtitle">About me</p>
                        <p className="normal">I'm a <span className="green">Web Developer</span></p>
                        <br />
                    </div>
                    <div className="card">
                        <br />
                        <p className="subtitle">What I do?</p>
                        <p className="normal">I do pretty, optimized and responsive <span className="pink">websites</span></p>
                        <br />
                    </div>
                </div>
                <Repo />
                <FormEmail />
            </div>
        </main>
    )
}

export default App;