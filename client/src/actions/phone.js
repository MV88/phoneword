
const WORDS_RECEIVED = "WORDS_RECEIVED";

function wordsReceived(words) {
    return {
        type: WORDS_RECEIVED,
        words
    };
};

module.exports = {
    fetchWords: (word) => {
        return dispatch => {
            const myHeaders = new Headers({
                "Accept": "application/json"
            });
            const config = {
                method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default'
            };
            return fetch(`/words?search=` + word , config)
                .then( (response) => response.json() )
                .then( (data) => dispatch(wordsReceived(data.data)))
                .catch( (e) => console.log(e) );
        }
    }
}
