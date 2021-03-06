import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    render() {
        return (
            <div className="projects-grid" style={{margin: 'auto', flex:'flexbox'}}>
                <Grid>
                    <Cell col={6}>
                        <Card className="card-body-project" shadow={5}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('assets/images/passwordgen.png')"}}></CardTitle>
                            <CardText>Password Generator</CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/cailinyoung/c-young-password-generator" target="_blank">GitHub</Button>
                                <Button colored href="https://cailinyoung.github.io/c-young-password-generator/" target="_blank">Live Site</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card className="card-body-project" shadow={5}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('assets/images/dayplanner.png')"}}></CardTitle>
                            <CardText>Day Planner</CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/cailinyoung/cyoung-dayplanner" target="_blank">GitHub</Button>
                                <Button colored href="https://cailinyoung.github.io/cyoung-dayplanner/" target="_blank">Live Site</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card className="card-body-project" shadow={5}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('assets/images/projectone.png')"}}></CardTitle>
                            <CardText>Project 1 - NPOCA</CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/chloewils/weatherNationalParks" target="_blank">GitHub</Button>
                                <Button colored href="https://chloewils.github.io/weatherNationalParks" target="_blank">Live Site</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </Cell>
                <Cell col={6}>
                    <Card className="card-body-project" shadow={5}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('assets/images/fitnesstracker.png')"}}></CardTitle>
                            <CardText>Fitness Tracker</CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/cailinyoung/c-young-hw17" target="_blank">GitHub</Button>
                                <Button colored href=" https://c-young-hw17.herokuapp.com/?id=603af31eca7fde0015042cdd" target="_blank">Live Site</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card className="card-body-project" shadow={5}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('assets/images/notetaker.png')"}}></CardTitle>
                            <CardText>Note Taker</CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/cailinyoung/cyoung-notetaker" target="_blank">GitHub</Button>
                                <Button colored href="https://cyoung-notetaker.herokuapp.com/"target="_blank">Live Site</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card className="card-body-project" shadow={5}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('assets/images/nodejs.png')"}}></CardTitle>
                            <CardText>NodeJS</CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/cailinyoung/cyoung-nodeJS" target="_blank">GitHub</Button>
                                <Button colored href="https://youtu.be/pAiTAv-3F6U" target="_blank">Demo Video</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </Cell>   
                </Grid>
            </div>
        )
    }
}

export default Projects;

