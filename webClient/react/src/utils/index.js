/**
 * Created by ben on 15/11/18.
 */
import roomData from './roomData';


let createReducer = (initialState, reducerMap) => {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type];

        return reducer
            ? reducer(state, action.payload)
            : state;
    };
}

let createConstants = (...constants) => {
    return constants.reduce((acc, constant) => {
        acc[constant] = constant;
        return acc;
    }, {});
}

let checkHttpStatus = (response) =>{
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error
    }
}

let parseJSON = (response)  => {
    return response.json()
}

let  arrayContains = (array, obj) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === obj) {
            return true;
        }
    }
    return false;
}



export {
    createReducer, createConstants, checkHttpStatus, parseJSON,
     roomData, arrayContains
};