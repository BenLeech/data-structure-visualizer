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

const addNode = (node, value) => {
    if(node == null){
        //make a new node - the root
    } else {
        if (value < node.value) {
            if(node.leftNode != null) {
                addNode(node.leftNode, value);
            } else {
              //s = new node containing value
              //node.leftNode = s;
            }
        } else {
            if(node.rightNode != null) {
                addNode(node.rightNode, value);
            } else {
                //s = new node containing value
                //node.rightNode = s;
            }
        }
    }
};

export default rootReducer;