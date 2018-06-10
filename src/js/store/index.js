import { createStore } from "redux";
import rootReducer from "../reducers/index";
import React from "react";

const store = createStore(rootReducer);

export default store;