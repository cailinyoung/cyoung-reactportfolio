import React from 'react';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './projects';
import Resume from './resume';

import {Switch, Route} from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/resume" component={Resume}/>
    </Switch>
)

export default Main;