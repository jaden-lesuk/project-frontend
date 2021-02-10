import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTweets } from '../flux/actions/PredictionActions';
import { Spinner, Container, Alert } from 'react-bootstrap';

import Tweet from './Tweet';

class TwitterStream extends Component {

    state = {
        loading: true
    }

    componentDidMount(){
        this.props.getTweets();
        this.setState({loading:false});
    }

    render() {
        const {tweets} = this.props.prediction;
        return (
            <Container>
                <Alert variant="info">This is a livestream of tweets</Alert>
                {
                    tweets.length === 0?
                    <div className="text-center"><Spinner animation="grow" variant="light" /></div>

                    :  tweets.map( item => (<Tweet key={item.id} tweet={item} />)) 
                }
                

            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    prediction: state.prediction
})


export default connect(mapStateToProps, {getTweets})(TwitterStream);