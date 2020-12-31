import React, { Component } from 'react';

export default class Sidebar extends Component{
    render(){
        return(
            <div id="Sidebar">
                <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                <aside id="colorlib-aside" className="border js-fullheight">
                    <div className="text-center">
                    <div className="author-img" style={{backgroundImage: 'url(images/Profile.jpg)'}} />
                    <h1 id="colorlib-logo"><a href="index.html">Wai Yan Aung</a></h1>
                    </div>
                    <nav id="colorlib-main-menu" role="navigation" className="navbar">
                    <div id="navbar" className="collapse">
                        <ul>
                        <li className="active"><a href="#introduction" data-nav-section="introduction">Introduction</a></li>
                        <li><a href="#education" data-nav-section="education">Education</a></li>
                        </ul>
                    </div>
                    </nav>
                <nav id="colorlib-main-menu">
                    <ul>
                        <li><a href="mailto:a.waiyan1998@gmail.com" target="_blank" rel="noopener noreferrer"><i className="icon-mail"/></a></li>
                        <li><a href="https://github.com/wyaaung" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/waiyanaung1998/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                        <li><a href="https://www.facebook.com/waiyanaung.k8/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2"/></a></li>
                    </ul>
                </nav>
                </aside>
            </div>
        )
    }
}