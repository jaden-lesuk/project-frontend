import  { combineReducers } from 'redux';
import predictionReducer from './PredictionReducer';

export default combineReducers({
    prediction: predictionReducer
});