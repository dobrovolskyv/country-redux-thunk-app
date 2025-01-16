import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import axios from 'axios';

import { rootReducer } from "./root-reducer";
import * as api from "../config"

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnchancers(
    applyMiddleware(
        thunk.withExtraArgument({
            client: axios,
            api,
        })
    ))
);


export { store }