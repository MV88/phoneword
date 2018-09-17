import {WORDS_RECEIVED, ADD_NUMBER, CLEAR} from '../actions/phone';
const assign = require('es6-object-assign').assign;

const initialState = {
    words: [],
    number: ""
};

export default (state = initialState, action) => {
    let updated = assign({}, state);
    switch(action.type) {

        case WORDS_RECEIVED: {
            updated['words'] = action.words;
            return updated;
        }
        case ADD_NUMBER: {
            updated['number'] = state.number + action.number;
            return updated;
        }
        case CLEAR: {
            updated['number'] = "";
            updated['words'] = [];
            return updated;
        }

        default:
          return state;
    }
};
