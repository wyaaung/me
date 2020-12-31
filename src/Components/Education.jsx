import React, { Component } from 'react';

export default class Education extends Component{
    render(){
        return(
            <div>
                <section className="colorlib-education" data-section="education">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Education</span>
                                <h2 className="colorlib-heading">Education</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <div className="fancy-collapse-panel">
                                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel panel-default">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="heading0">
                                                        <h4 className="panel-title"><a className="collapsed" data-toggle="collapse" data-parent="accordion" href="#collapse0" aria-expanded="false" aria-controls="collapse0">MEng Computer Systems Engineering</a></h4>
                                                    </div>
                                                    <div id="collapse0" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
                                                        <div className="panel-body">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <p>  
                                                                        I am expecting to graduate with an Undergraduate Integrated Master's Degree from University of Manchester in June 2023.
                                                                    </p>
                                                                    <p>
                                                                        Courses I have taken so far:<br/>
                                                                        <ul>
                                                                            <li>Mathematical Techniques for Computer Science</li>
                                                                            <li>Fundamentals of Computer Engineering(Verilog)</li>
                                                                            <li>Fundamentals of Computer Architecture(ARM Assembly)</li>
                                                                            <li>Programming 1(Python)</li>
                                                                        </ul>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div className="panel panel-default">
                                                    <div className="panel-heading" role="tab" id="heading1">
                                                        <h4 className="panel-title"><a className="collapsed" data-toggle="collapse" data-parent="accordion" href="#collapse1" aria-expanded="false" aria-controls="collapse1">A Levels, IGCSEs, and SAT</a></h4>
                                                    </div>
                                                    <div id="collapse1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                                                        <div className="panel-body">
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <p>
                                                                        A Levels<br/>
                                                                        <ul>
                                                                            <li>Mathematics - A<sup>*</sup></li>
                                                                            <li>Further Mathematics - A<sup>*</sup></li>
                                                                            <li>Physics - A<sup>*</sup></li>
                                                                        </ul>
                                                                        <br/>
                                                                        SAT Subject Tests<br/>
                                                                        <ul>
                                                                            <li>Mathematics Level II - 800</li>
                                                                            <li>Chemistry - 800</li>
                                                                            <li>Physics - 800</li>
                                                                        </ul>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        )
    }
}