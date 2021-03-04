import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
    render (){
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landingGrid'>
                    <Cell col={12}>
                        <img 
                            src="/assets/images/cailinavatar.png"
                            alt="cailin young avatar" 
                            className="avatar-image"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>

                            <p>
                                HTML | CSS | JAVASCRIPT | MYSQL | NODE JS | REACT | MONGODB | EXPRESS
                            </p>

                            <div className="social-links">
                                {/* linkdin */}
                                <a href="https://www.linkedin.com/in/cailinfayyoung/" rel="noopener noreferrer" target="_blank" alt="linkedin">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/* resume */}
                                <a href="https://github.com/cailinyoung" rel="noopener noreferrer" target="_blank" alt="resume">
                                    <i className="fa fa-id-card" aria-hidden="true"/>
                                </a>
                                {/* github */}
                                <a href="https://github.com/cailinyoung" rel="noopener noreferrer" target="_blank" alt="github">
                                    <i className="fa fa-github" aria-hidden="true"/>
                                </a>
                            </div>
                            <div className="contact-links">
                                <i className="fa fa-phone-square" aria-hidden="true"/>435-720-0337
                                <br/>
                                <i className="fa fa-envelope" aria-hidden="true"/> cailinfayyoung@gmail.com
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
