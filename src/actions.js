import { 
        CHANGE_SEARCH_FIELD,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_SUCCESS,
        REQUEST_ROBOTS_FAILED 
} from './constants.js';

// setSearchField
export const setSearchField = (text) => ({
        type: CHANGE_SEARCH_FIELD,
        payload: text //text the user entered in the Search field
}); //end of setSearchField

// requestRobots
export const requestRobots = () => (dispatch) => {
        dispatch({ type: REQUEST_ROBOTS_PENDING });
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}));
} //end of requestRobots