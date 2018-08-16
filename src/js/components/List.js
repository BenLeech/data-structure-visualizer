import React from "react";
import { connect } from "react-redux";
import Node from "./Node";


const mapStateToProps = state => {
    return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
    <div>
        <Node value="5"/>
        <ul className="list-group list-group-flush">
            {
                articles.map(el => (<Node value={el.value} key={el.id}></Node>))
            }
        </ul>
    </div>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;