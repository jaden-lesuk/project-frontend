import React, { Component } from 'react'
import { Card, Button} from 'react-bootstrap';

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

export default class PredictionItem extends Component {
    render() {
        const {source, link, title, text, prediction} = this.props.prediction
        const color = '#495057'
    
        // #495057 #212529

        return (
            <Card style={{marginBottom: '3vh', backgroundColor:color, borderLeft:'solid 5px'+colorMap[prediction]}}   text="white">
                {/* <Card.Header className="h5 font-weight-bold">
                    
                    
                </Card.Header> */}
                
                <Card.Body>
                    <div className="font-weight-bold">
                        <div className={`${textMap[prediction]}`}>
                            {`${classMap[prediction]}`}
                        </div>
                    </div>
                    <div className="h3">{title}</div>
                    
                    <Card.Text className="text-justify">{text.substring(0, 320)}...</Card.Text>
                    {link===''?'': <Button variant = "outline-light float-right" as="a" href={link}>Visit {source}</Button>}
                    
                    
                </Card.Body>

                {/* <Card.Footer className="h5 font-weight-bold">
                    Source: {source}
                </Card.Footer> */}

            </Card>
        )
    }
}
