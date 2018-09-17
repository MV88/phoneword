import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Button} from 'react-bootstrap';
require("../../css/index.css");
class CellPhone extends Component {

    render(){
        const { num, keys, onClick, clear } = this.props;
        return (
                <div className={"cell item" + num + (clear ? "clear" : "")} onClick={() => onClick(num)}>
                    <Button>{num}<br/>{keys}</Button>
                </div>
        );
    }
}
CellPhone.PropTypes= {
    // properties
    keys: PropTypes.string,
    num: PropTypes.number,
    //callbacks
    onClick: PropTypes.function
}
export default CellPhone
