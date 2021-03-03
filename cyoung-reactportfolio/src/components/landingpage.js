import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Landing extends Component{
    render (){
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='landingGrid'>
                    <Cell col={12}>
                        <img 
                            src='./public/images/cailinavatar'
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
                                <a href="http:/google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/* github */}
                                <a href="http:/google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
