import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getPrediction } from '../flux/actions/PredictionActions';
import { postPrediction } from '../flux/actions/PredictionActions'
import { Spinner, Container } from 'react-bootstrap';
import PredictionItem from './PredictionItem';


class Prediction extends Component {
    state = {
        loading: true,
        currentPage: 1,
        articlesPerPage: 3
    }

    componentDidMount(){
        this.props.getPrediction();
        this.setState({loading:false});
    }

    render(){
        const {predictions} = this.props.prediction;
        return(
            <Container>
                {
                    predictions.length === 0?
                    <div className="text-center"><Spinner animation="grow" variant="light" /></div>

                    :  predictions.map( item => (<PredictionItem key={item.id.$oid} prediction={item} />)) 
                }
                

            </Container>
                         
            
        )
    }
}

const mapStateToProps = (state) => ({
    prediction: state.prediction
})


export default connect(mapStateToProps, {getPrediction, postPrediction})(Prediction);