import React from "react";
import PropTypes from "prop-types";

export class Line extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beginNode: null,
            endNode: null
        }
    }

    render() {
        return (
          <div className="line">
          </div>
        );
    }
}

Line.propTypes = {
    beginNode: PropTypes.node,
    endNode: PropTypes.node
};