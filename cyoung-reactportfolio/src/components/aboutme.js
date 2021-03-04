import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class AboutMe extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={12}>
                        <h2> About Me</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/FRED_man-512.png"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}> 
                        Hello! I'm Cailin Young! I'm a recent graduate from the University of Utah's Full Stack Flex Bootcamp! 
                        I currently live in Ogden, Utah... but was raised in Brigham City, Utah. Land of the peaches! Well, right after Georgia anyway. I've always had an interest in tech, so when the opportunity presented itself to get involved I jumped on it! So glad I did! It's been such a rewarding experience to dive into this world. </p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default AboutMe;
