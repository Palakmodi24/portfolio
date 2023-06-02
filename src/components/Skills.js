import React from "react";
import "../styles/Skills.css";

const Skills = () => {
    return (
        <section id="skills" className="skill-section">
            <h5>Why Choose Me</h5>
            <h2>My Skills</h2>
            <div className="container">
                <div className="section-title center"></div>
                <div className="skill-items">
                    <div className="skill-item">
                        <div className="skill-info">
                            <p className="skill-name">Frontend Development</p>
                            <p className="skill-percent">80%</p>
                        </div>
                        <div className="progress-line" data-percent="80%">
                            <span style={{ width: "80%" }}></span>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-info">
                            <p className="skill-name">ReactJS</p>
                            <p className="skill-percent">85%</p>
                        </div>
                        <div className="progress-line" data-percent="85%">
                            <span style={{ width: "85%" }}></span>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-info">
                            <p className="skill-name">DSA</p>
                            <p className="skill-percent">70%</p>
                        </div>
                        <div className="progress-line" data-percent="70%">
                            <span style={{ width: "70%" }}></span>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-info">
                            <p className="skill-name">Machine Learning</p>
                            <p className="skill-percent">35%</p>
                        </div>
                        <div className="progress-line" data-percent="35%">
                            <span style={{ width: "35%" }}></span>
                        </div>
                    </div>

                    <div className="skill-item">
                        <div className="skill-info">
                            <p className="skill-name">NLP</p>
                            <p className="skill-percent">45%</p>
                        </div>
                        <div className="progress-line" data-percent="45%">
                            <span style={{ width: "45%" }}></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
