import axios from 'axios';
import { GET_PREDICTION, PREDICTION_RESULT } from './types';

export const getPrediction = () => dispatch => {
    return axios
    .get('http://www.mocky.io/v2/5dfb8eab2f000056c4ffa05c')
    .then(
        res => {
            console.log(res)
            dispatch( {type: GET_PREDICTION, payload: res.data.tasks} )
        }
    )
    .catch(
        err => { console.log(err) }
    )
}

export const postPrediction = (title, author, maintext) => dispatch => {
    return axios
    .post('http://localhost:5000/api', {
        title,
        author,
        maintext
    })
    .then(
        res => {
            console.log(title);
            console.log(res);
            dispatch( {type: PREDICTION_RESULT, payload: res.data} )
        }
    )
    .catch(
        err => { console.log(err) }
    )
}