import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import RowPhone from '../layouts/RowPhone';
import Results from '../presentation/Results';
import PropTypes from 'prop-types';
// import {fetchWords} from '../../actions/phone';

const firstRow = [{keys: ".", num: 1}, {keys: "abc", num: 2}, {keys: "def", num: 3}];
const secondRow = [{keys: "ghi", num: 4}, {keys: "jkl", num: 5}, {keys: "mno", num: 6}];
const thirdRow = [{keys: "pqrs", num: 7}, {keys: "tuv", num: 8}, {keys: "wxyz", num: 9}];
const forthRow = [null, {keys: "clear", num: 0, clear: {} }, null];

class GridPhone extends Component {
    render() {
        const {words} = this.props;
        return (
            <Grid className="phoneword-grid">
                <RowPhone data={firstRow}/>
                <RowPhone data={secondRow}/>
                <RowPhone data={thirdRow}/>
                <RowPhone data={forthRow}/>
                <Results words={words}/>
            </Grid>
        );
    }
};

GridPhone.PropTypes = {
    words: PropTypes.array
}

const mapStateToProps = state => {
    return {
        words: state.phoneword.words
    }
}

export default connect(mapStateToProps)(GridPhone);
