import React, { Component } from 'react';

export default class Technical extends Component{
    render(){
        return(
            <section className="colorlib-education" data-section="technical">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Technical Skills</span>
                        <h2 className="colorlib-heading">Technical Skills</h2>
                    </div>
                </div>
                {/* <div className="row row-pt-md">
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-2">
                            <span className="icon">
                                <i className="icon-device-laptop"/>
                            </span>
                            <div className="desc">
                                <h3>Programming Languages</h3>
                                <p>
                                <i class="devicon-python-plain-wordmark colored"></i>
                                <i class="devicon-javascript-plain colored"></i>
                                <i class="devicon-cplusplus-line-wordmark"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row user">
                <div className="four columns">
                    <h5>Programming Langauges</h5>
                    <i className="devicon-python-plain-wordmark colored"/>
                    <i className="devicon-cplusplus-line-wordmark colored"/>
                    <i className="devicon-javascript-plain colored"/>
                    <i className="devicon-java-plain-wordmark colored"></i>
                </div>
                <div className="four columns">
                    <h5>Frameworks</h5>
                    <i className="devicon-django-line-wordmark colored"></i>
                    <i className="devicon-react-original colored"></i>
                </div>
                <div className="four columns">
                    <h5>Developer Tools</h5>
                    <i className="devicon-gitlab-plain colored"></i>
                    <i className="devicon-visualstudio-plain colored"></i>
                </div>
                </div>

            </div>
            </section>
        )
    }
}