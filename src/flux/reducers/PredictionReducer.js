import { GET_PREDICTION, PREDICTION_RESULT, GET_TWEETS } from '../actions/types'

const initialState = {
    predictions: [],
    tweets: [],
    predictionResult: ''
}

export default function Reducer( state=initialState, action ) {
    switch (action.type) {
        case GET_PREDICTION:
            return {
                ...state,
                predictions: action.payload,
            };

        case PREDICTION_RESULT:
            return {
                ...state,
                predictionResult: action.payload,
            };

        case GET_TWEETS:
            return {
                ...state,
                tweets: action.payload,
            };

        default:
            return state;
    }
}