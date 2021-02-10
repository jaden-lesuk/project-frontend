import axios from 'axios';
import { GET_PREDICTION, PREDICTION_RESULT, GET_TWEETS } from './types';

export const getPrediction = () => dispatch => {
    return axios
    .get('http://localhost:5000/api/v1/predictions')
    .then(
        res => {
            console.log(res)
            dispatch( {type: GET_PREDICTION, payload: res.data} )
        }
    )
    .catch(
        err => { console.log(err) }
    )
}

export const postPrediction = (title, maintext, source, link) => dispatch => {
    return axios
    .post('http://localhost:5000/api/v1/newprediction', {
        title,
        maintext,
        source,
        link
    })
    .then(
        res => {
            dispatch( {type: PREDICTION_RESULT, payload: res.data} )
        }
    )
    .catch(
        err => { console.log(err) }
    )
}

export const getTweets = () => dispatch => {
    return axios
    .get('http://localhost:5000/api/v1/tweets')
    .then(
        res => {
            console.log(res)
            dispatch( {type: GET_TWEETS, payload: res.data} )
        }
    )
    .catch(
        err => { console.log(err) }
    )
}