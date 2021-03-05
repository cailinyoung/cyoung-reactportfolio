import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-left-column" col={4}>
                        <div style={{ textAlign: "center" }}>
                            <img
                                src="/assets/images/cailinavatar.png"
                                alt="cailin young avatar"
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Cailin Young</h2>
                        <h4 style={{ color: 'gray' }}>Software Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Full stack web developer with a strong background in
                        customer service, ready to use my skills, and grow forward in
                        the world of software development.
                        Earned a certificate in Full Stack Web Development from the
                        University of Utah Coding Boot Camp. Strengths in teamwork,
                        creativity, planning, leadership, communication, time
                        management, and determination to succeed.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>3019 S 1320 W Perry, Utah 84302</p>
                        <h5>Phone Number</h5>
                        <p>(435)-720-0337</p>
                        <h5>Email</h5>
                        <p>cailinfayyoung@gmail.com</p>
                        <h5>Github</h5>
                        <p>https://github.com/cailinyoung</p>
                        <h5>Linkedin</h5>
                        <p>https://www.linkedin.com/in/cailinfayyoung/</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Downloadable Resume <a href="https://drive.google.com/file/d/1iYLOGZ21ibv1J9sSgbAgHyfQlTRouUYm/view?usp=sharing" rel="noopener noreferrer" target="_blank" alt="resume">
                            <i class="fa fa-file-pdf-o fa-lg" aria-hidden="true"></i>
                        </a></h5>


                    </Cell>
                    <Cell className="resume-right-column" col={8}>
                        <h2>Education and Experience</h2>

                        <Education
                            startYear={2020}
                            endYear={2021}
                            schoolName="University of Utah"
                            schoolDescription="Full Stack Flex Coding Bootcamp - Certificate"
                        />
                        <hr style={{ borderTop: '3px solid white' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="HTML/CSS"
                            progress={90}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={50}
                        />
                        <Skills
                            skill="Node JS"
                            progress={60}
                        />
                        <Skills
                            skill="MongoDB"
                            progress={50}
                        />
                        <Skills
                            skill="MySQL"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={40}
                        />
                        <hr style={{ borderTop: '3px solid white' }} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
