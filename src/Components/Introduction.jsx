import React, { Component } from 'react';

export default class Introduction extends Component{
    render(){
        return(
            <div id="Introduction">
                <section className="colorlib-about" data-section="introduction">
                <div className="colorlib-narrow-content">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                        <div className="col-md-12">
                            <div className="about-desc">
                            <span className="heading-meta">Introduction</span>
                            <h2 className="colorlib-heading">Who Am I?</h2>
                            <p>I am a first year Computer Systems Engineering(CSE) Undergraduate at University of Manchester expecting to graduate in June 2024. I am passionate about learning new and challenging things that I have never done or heard of before. If you have some interesting projects or roles that I can acquire new skills, please feel free to contact me.</p>
                            <p>Apart from studies, I usually play Table Tennis, and do workout 5 times a week. I also love to meet and have conversations with friends.</p>
                            <p><a className="btn btn-primary btn-outline-dark" href="files/CV.pdf" target="_blank" >DOWNLOAD MY CV <i className="icon-download4" /></a></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            </div>

        );
    }
}