import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { reducer } from '../reducer';

// const store = configureStore({ reducer });
const store = createStore(reducer, applyMiddleware(thunk));

export default store;