import React, { Component } from 'react';
import { Card , Row , Col} from 'react-bootstrap';
import { Paper,Avatar,ListItem,ListItemSecondaryAction,ListItemText,ListItemAvatar,List} from '@material-ui/core';
import './card.style.css';

export default class  LatestBiographies extends Component{
    render(){
        return(<div>
          
                <Card className="bg-transparent text-dark border-0">
                <Paper elevation={3}>
                     <Card.Img src="https://dummyimage.com/200/#2d2d2d/fff" alt="Card image" />
                </Paper>
                <Card.ImgOverlay>
                    <Row>
                        <Col className="pl-3" xs={7}><p>Biography title</p></Col>
                        <Col xs={{ span: 4, offset: 1 }}><p>5:30</p></Col>
                    </Row>
                </Card.ImgOverlay>
                <List dense>
                    <ListItem className="p-0">
                        <ListItemAvatar className="p-0">
                            <Avatar>
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText className="p-0" primary="John Doe" secondary="Mobile" />
                        <ListItemSecondaryAction className="p-0">
                                <p className="text-grey">13 Nov 2019</p>
                        </ListItemSecondaryAction>
                    </ListItem>  
                </List>                  
                </Card>  
           
        </div>);
    }
}
