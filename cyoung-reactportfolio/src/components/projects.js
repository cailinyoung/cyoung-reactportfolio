import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    render() {
        return (
            <div className="projects-grid" style={{width: '80%', margin: 'auto', flex:'flexbox'}}>
                <Grid>
                    <Cell className="project-card" col={6}> 6
                        <Card shadow={5} style={{minWidth:'450', margin:'30%'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background:'/'}}>Password Generator</CardTitle>
                            <CardText>Password Generator</CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/cailinyoung/c-young-password-generator">GitHub</Button>
                                <Button colored href="https://cailinyoung.github.io/c-young-password-generator/">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card shadow={5} style={{minWidth:'450', margin:'30%'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background:'/'}}>Day Planner</CardTitle>
                            <CardText>Day Planner</CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/cailinyoung/cyoung-dayplanner">GitHub</Button>
                                <Button colored href="https://cailinyoung.github.io/cyoung-dayplanner/">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card shadow={5} style={{minWidth:'450', margin:'30%'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background:'/'}}>Project 1 - CEDS Travel</CardTitle>
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
                <Cell className="project-card" col={6}>6
                    <Card shadow={5} style={{minWidth:'450', margin:'30%'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background:'/'}}>Fitness Tracker</CardTitle>
                            <CardText>nice</CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/cailinyoung/c-young-hw17">GitHub</Button>
                                <Button colored href=" https://c-young-hw17.herokuapp.com/?id=603af31eca7fde0015042cdd">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card shadow={5} style={{minWidth:'450', margin:'30%'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background:'/'}}>Note Taker</CardTitle>
                            <CardText>Note Taker</CardText>
                            <CardActions border>
                                <Button colored href="https://github.com/cailinyoung/cyoung-notetaker">GitHub</Button>
                                <Button colored href="https://cyoung-notetaker.herokuapp.com/">LiveSite</Button>
                            </CardActions>
                            <CardMenu style={{color:'#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        <Card shadow={5} style={{minWidth:'450', margin:'30%'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background:"/"}}>
                            NodeJS</CardTitle>
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

