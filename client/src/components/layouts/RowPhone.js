import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CellPhone from '../presentation/CellPhone';
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

/**
    Component used to render a row of cells
*/
class RowPhone extends Component {
    render() {
        const {data, onClick } = this.props;
        return (
            <Row>
                {
                    data.map((d, i) => {
                        return (<Col xs={4} key={i}> {d && <CellPhone {...d} onClick={onClick}/>}</Col>);
                    })
                }
            </Row>
            );
    }
}

RowPhone.propTypes = {
    // properties
    data: PropTypes.array,
    //callbacks
    onClick: PropTypes.function
}

export default RowPhone;
