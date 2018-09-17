
const WORDS_RECEIVED = "WORDS_RECEIVED";

function wordsReceived(words) {
    return {
        type: WORDS_RECEIVED,
        words
    };
};

const ADD_NUMBER = "ADD_NUMBER";

function addNumber(number) {
    return {
        type: ADD_NUMBER,
        number
    };
};

const CLEAR = "CLEAR";

function clear(number) {
    return {
        type: CLEAR
    };
};


module.exports = {
    fetchWords: (number) => {
        return (dispatch) => {
            const myHeaders = new Headers({
                "Accept": "application/json"
            });
            const config = {
                method: 'GET',
                headers: myHeaders,
                mode: 'cors',
                cache: 'default'
            };
            return fetch(`/words/` + number , config)
                .then( (response) => response.json() )
                .then( (data) => dispatch(wordsReceived(data.words)))
                .catch( (e) => console.log(e) );
        }
    },
    clearNumber: () => {
        return (dispatch) => {
            return dispatch(clear());
        }
    },
    addNumber: (number) => {
        return (dispatch) => {
            return dispatch(addNumber(number));
        }
    },
    CLEAR,
    ADD_NUMBER,
    WORDS_RECEIVED
}
