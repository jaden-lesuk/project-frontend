import React, { Component } from 'react'

import {Card} from 'react-bootstrap';
import {PersonCircle} from 'react-bootstrap-icons';

const colorMap ={
    0: "#28a745",
    1: "#dc3545"
}

const classMap ={
    0: "TRUE",
    1: "FALSE"
}

const textMap = {
    0: "text-success",
    1: "text-danger"
}

export default class Tweet extends Component {
    render() {
        const {prediction, text, user} = this.props.tweet

        const CardStyle = {
            marginBottom: '3vh', 
            borderLeft:'solid 5px'+colorMap[prediction],
            padding: '3vh',
            // backgroundColor: '#1DA1F2',
            
        }

        return (
            <div>
                <Card style={CardStyle} bg='light'>

                    

                    <div className="font-weight-bold">
                            <div className={`${textMap[prediction]}`}>
                                {`${classMap[prediction]}`}
                            </div>
                    </div>
                    <div className="h4 font-weight-bold"><PersonCircle/> {user}</div>
                    <Card.Text className="text-justify h6">{text}</Card.Text>
                </Card>
            </div>
        )
    }
}
