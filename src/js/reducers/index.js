import {ADD_NODE} from "../constants/action-types";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NODE:
            return {...state, articles: [...state.articles, action.payload] };
        default:
            return state;
    }
};

export default rootReducer;