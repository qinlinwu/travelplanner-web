import React, {Component} from 'react';
import {List, Avatar, Button, Checkbox} from 'antd'; 
import choice from "../assets/images/choice_img.svg";
import axios from 'axios';

class Choice extends Component{
    
    onShowGoogleMap = ()=>{
        //send this selected arr to the Main for data communication
        this.props.onshowMap(this.state.selected); 
    }
    
    render(){
    return (
            <div>
                Please make a selection
                <hr/>  
                <List
                    className="choice-list"
                    itemLayout="horizontal"
                    size="small"
                    // dataSource={satList}
                    renderItem={item => (
                        <List.Item
                            actions={[<Checkbox dataInfo={item} onChange={this.onChange}/>]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar size={50} src={choice} />}
                                title={<p>{item.name}</p>}
                            />
                        </List.Item>
                    )}
                />
                <Button className="choice-list-btn"
                        type="primary"
                        // disabled={ selected.length === 0}
                        onClick={this.onShowGoogleMap}
                >Show on Map</Button>
            </div>
                
    );
}
}

export default Choice;
