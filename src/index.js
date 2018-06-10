import store from "./js/store";
import { render } from 'react-dom';
import {Provider} from "react-redux";
import App from "./js/components/App";
import React from "react";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

