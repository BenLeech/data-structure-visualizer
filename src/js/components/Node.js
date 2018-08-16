import React from "react";
import "../../styles/Node.css";

class Node extends React.Component {
    render() {
        return (
            <div className="node">
                {this.props.value}
            </div>
        );
    }
}
export default Node;