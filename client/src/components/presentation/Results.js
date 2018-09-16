import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
    Component used to render a row of cells
*/
class RowPhone extends Component {
    render() {
        const {words } = this.props;
        const wordsItems = words.map( (word, i) => {
              return ( <li key={i}>{word}</li> );
          });
        return (
            <div>
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
