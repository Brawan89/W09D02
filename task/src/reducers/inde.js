import { createStore , combineReducers } from "redux";
import { composeWidthDevTools } from "redux-devtools-extension";

import signIn from "./login";
const reducers = combineReducers({ signIn });

const store = () => {
    return createStore(reducers , composeWidthDevTools() );
};


export default store();