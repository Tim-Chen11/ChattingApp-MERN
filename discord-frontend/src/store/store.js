import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
    auth: authReducer
});

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
