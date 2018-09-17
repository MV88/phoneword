import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import RowPhone from '../layouts/RowPhone';
import Results from '../presentation/Results';
import PropTypes from 'prop-types';
import {fetchWords, clearNumber, addNumber} from '../../actions/phone';

const firstRow = [{keys: ".", num: "1"}, {keys: "abc", num: "2"}, {keys: "def", num: "3"}];
const secondRow = [{keys: "ghi", num: "4"}, {keys: "jkl", num: "5"}, {keys: "mno", num: "6"}];
const thirdRow = [{keys: "pqrs", num: "7"}, {keys: "tuv", num: "8"}, {keys: "wxyz", num: "9"}];
const forthRow = [null, {keys: "clear", num: "0", clear: true }, null];

class GridPhone extends Component {
    render() {
        const {words, number, dispatch} = this.props;
        return (
            <Grid className="phoneword-grid">
                <RowPhone data={firstRow} onClick={(num) => this.updateAndFetch({num, number, dispatch})}/>
                <RowPhone data={secondRow} onClick={(num) => this.updateAndFetch({num, number, dispatch})}/>
                <RowPhone data={thirdRow} onClick={(num) => this.updateAndFetch({num, number, dispatch})}/>
                <RowPhone data={forthRow} onClick={() => dispatch(clearNumber())}/>
                <Results words={words} number={number}/>
            </Grid>
        );
    }

    updateAndFetch({num, number, dispatch}) {
        dispatch(addNumber(num));
        dispatch(fetchWords(number + num));
    }
};

GridPhone.propTypes = {
    words: PropTypes.array,
    number: PropTypes.string
}

const mapStateToProps = state => {
    return {
        words: state.phoneword.words,
        number: state.phoneword.number
    }
}

export default connect(mapStateToProps)(GridPhone);
