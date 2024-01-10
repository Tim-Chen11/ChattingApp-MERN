import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";
import friendsReducer from "./reducers/friendsReducer";
import chatReducer from "./reducers/chatReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  friends: friendsReducer,
  chat: chatReducer,
});

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
