import React from 'react';
import {Container, Jumbotron, Row, Col, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import News from '../images/news.png';
import Construct from '../images/construct.png';
import Claim from '../images/claim.png';

export default function Home() {
    return (
        <div>
            <Container>
                <Jumbotron style={{backgroundColor:"white"}}>
                    <Container fluid>
                        <Row>
                            <Col>
                                <img src={News} width="300vw" height="300vh" alt="" className="float-left"/>
                            </Col>

                            <Col className="my-auto">
                                <div >
                                    <h1>What is Juxtapose?</h1>
                                    <p  className="text-left">
                                        Juxtapose is a proudly Kenyan automated fact checker. Press the button below to use it...
                                    </p>
                                    <div className="text-center"><Button variant="outline-dark" as={Link} to="/newprediction">Use Juxtapose</Button></div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </Container>

            <Container>
                <Jumbotron style={{backgroundColor:"white"}}>
                    <Container fluid>
                        <Row>
                            <Col className="my-auto">
                                <div >
                                    <h1>How was it made?</h1>
                                    <p  className="text-left">
                                        Juxtapose is built on top of an A.I. model that was fed on diet of fake and real news articles and learnt how to tell them apart.
                                    </p>
                                </div>
                            </Col>
                        
                            <Col>
                                <img src={Construct} width="300vw" height="300vh" alt="" className="float-right"/>
                            </Col>

                        </Row>
                    </Container>
                </Jumbotron>
            </Container>

            <Container>
                <Jumbotron style={{backgroundColor:"white"}}>
                    <Container fluid>
                        <Row>
                            <Col>
                                <img src={Claim} width="300vw" height="300vh" alt="" className="float-left"/>
                            </Col>

                            <Col className="my-auto">
                                <div >
                                    <h1>How are articles labelled?</h1>
                                    <p  className="text-left">
                                        Juxtapose labels an article as either allegedly True or allegedly False.
                                       
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </Container>
        </div>
    )
}

