import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export default class ChordCard extends React.Component {

        constructor(props){
            super(props);

            this.state={
                open:false,
            };
        }

        handleTouchTap(event){
            event.preventDefault();

            this.setState({
                open:true,
                anchorEl: event.currentTarget,
            });
        };

        handleRequestClose(){
            this.setState({
                open:false,
            });
        };
        render(){

        return(
        <Card>
            <CardTitle  title="I" subtitle="C Major"/>
            <CardText>
            I is the Tonic chord of a Major/Minor key. many songs begin this chord
            and end this. have a very stability harmony.
            </CardText>
            <CardActions>
                <FlatButton 
                    onTouchTap={this.handleTouchTap.bind(this)}
                    label="click me"
                />
                <Popover
                    open ={this.state.open}
                    anchorEl = {this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left',vertical:'bottom'}}
                    targetOrigin={{horizontal:'left',vertical:'top'}}
                    onRequestClose={this.handleRequestClose.bind(this)}
                >

                    <Menu>
                        <MenuItem primaryText="Setting" />
                        <MenuItem primaryText="Delete" />
                    </Menu>

                </Popover>
            </CardActions>
        </Card>
        );
        }
}



