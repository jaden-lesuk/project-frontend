import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getPrediction } from '../flux/actions/PredictionActions';
import { postPrediction } from '../flux/actions/PredictionActions'

class Prediction extends Component {
    componentDidMount(){
        this.props.getPrediction();
        // this.props.postPrediction();
    }

    render(){
        const {predictions} = this.props.prediction;
        const {predictionResult} = this.props.prediction;

        return(
            <div>
                <div>Prediction: {predictionResult[0]}</div>
                { predictions.map( item => (
                    <div> {item.name} </div>
                ))}          
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    prediction: state.prediction
})


export default connect(mapStateToProps, {getPrediction, postPrediction})(Prediction);