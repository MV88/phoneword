import {WORDS_RECEIVED} from '../actions/phone';
const assign = require('es6-object-assign').assign;

const initialState = {
    words: ["hand", "game"],
    number: null
};

export default (state = initialState, action) => {
    let updated = assign({}, state);
    switch(action.type) {

        case WORDS_RECEIVED: {
            updated['words'] = action.words;
            return updated;
        }

        default:
          return state;
    }
};
