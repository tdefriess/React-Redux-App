import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_CIVILIZATIONS = "UPDATE_CIVILIZATIONS"
export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA});
    axios
        .get('https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        .then(res => {
            console.log('Response', res);
            dispatch({ type: UPDATE_CIVILIZATIONS, payload: res.data });
        })
        .catch(err => {
            console.error("Error fetching data from api, err: ", err);
        })
}