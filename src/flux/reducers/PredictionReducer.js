import { GET_PREDICTION, PREDICTION_RESULT } from '../actions/types'

const initialState = {
    predictions: [],
    predictionResult: '0'
}

export default function( state=initialState, action ) {
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

        default:
            return state;
    }
}