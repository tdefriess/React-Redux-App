import { FETCH_DATA, UPDATE_CIVILIZATIONS } from "../actions";

const initialState = {
    civilizations: [],
    isFetchingData: false,
}

export const civilizationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            console.log('fetching data...')
            return {
                ...state,
                isFetchingData: true,
                civilizations: []
            }
        case UPDATE_CIVILIZATIONS:
            console.log('updating civilization list')
            console.log('Payload:', action.payload);
            return {
                ...state,
                civilizations: action.payload,
                isFetchingData: false
            }
        default:
            return state;
    }
}