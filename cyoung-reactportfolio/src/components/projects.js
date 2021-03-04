import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    render() {
        return (
            <div className="projects-grid" style={{margin: 'auto', flex:'flexbox'}}>
                <Grid>
                    <Cell col={6}>
                        <Card className="card-body-project" shadow={5}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('assets/images/passwordgen.png')"}}>Password Generator</CardTitle>
                            <CardText>Password Generator</CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/cailinyoung/c-young-password-generator">GitHub</Button>
                                <Button colored href="https://cailinyoung.github.io/c-young-password-generator/">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card className="card-body-project" shadow={5}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('assets/images/dayplanner.png')"}}>Day Planner</CardTitle>
                            <CardText>Day Planner</CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/cailinyoung/cyoung-dayplanner">GitHub</Button>
                                <Button colored href="https://cailinyoung.github.io/cyoung-dayplanner/">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card className="card-body-project" shadow={5}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('assets/images/projectone.png')"}}>Project 1 - CEDS Travel</CardTitle>
                            <CardText>Project 1 - CEDS Travel</CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/chloewils/weatherNationalParks">GitHub</Button>
                                <Button colored href="https://chloewils.github.io/weatherNationalParks">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </Cell>
                <Cell col={6}>
                    <Card className="card-body-project" shadow={5}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('assets/images/fitnesstracker.png')"}}>Fitness Tracker</CardTitle>
                            <CardText>nice</CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/cailinyoung/c-young-hw17">GitHub</Button>
                                <Button colored href=" https://c-young-hw17.herokuapp.com/?id=603af31eca7fde0015042cdd">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card className="card-body-project" shadow={5}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('assets/images/notetaker.png')"}}>Note Taker</CardTitle>
                            <CardText>Note Taker</CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/cailinyoung/cyoung-notetaker">GitHub</Button>
                                <Button colored href="https://cyoung-notetaker.herokuapp.com/">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card className="card-body-project" shadow={5}>
                            <CardTitle className="card-title" style={{backgroundImage:"url('assets/images/nodejs.png')"}}>NodeJS</CardTitle>
                            <CardText>NodeJS</CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/cailinyoung/cyoung-nodeJS">GitHub</Button>
                                <Button colored href="https://youtu.be/pAiTAv-3F6U">Demo Video</Button>
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

