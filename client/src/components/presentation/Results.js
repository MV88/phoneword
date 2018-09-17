import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
    Component used to render the results fetched on the backend
*/
class RowPhone extends Component {
    render() {
        const {words, number } = this.props;
        const wordsItems = words.map( (word, i) => {
              return ( <li key={i}>{word}</li> );
          });
        return (
            <div className="results">
                <h4>Number inserted</h4>
                <p>{number}</p>
                <h4>Results</h4>
                <ul>{wordsItems}</ul>
            </div>
        );
    }
}

RowPhone.PropTypes = {
    // properties
    words: PropTypes.array
}

export default RowPhone;
