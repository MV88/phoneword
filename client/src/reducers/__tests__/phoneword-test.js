import {wordsReceived, clear, addNumber} from '../../actions/phone';
import phoneword from '../phoneword';

describe('phoneword reducer', () => {
    it('should return the initial state', () => {
        const initialState = {
            words: [],
            number: ""
        };
        const state = phoneword(undefined, {});
        expect(state).toEqual(initialState);
    });

    it('should handle WORDS_RECEIVED', () => {
        const word = "game";
        const state = phoneword({}, wordsReceived([word]));
        expect( state.words.length).toEqual(1);
        expect( state.words[0]).toEqual(word);
    });

    it('should handle CLEAR', () => {
        const word = "game";
        const state = phoneword({words: ["game", "hand"], number: "4326"}, clear());
        expect(state.words.length).toEqual(0);
        expect(state.number).toEqual("");
    });


    it('should handle ADD_NUMBER', () => {
        const num = "4";
        const state = phoneword({words: ["g", "h", "i"], number: "4"}, addNumber("5"));
        expect(state.words.length).toEqual(3);
        expect(state.number).toEqual("45");
    });
});
