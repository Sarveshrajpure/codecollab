import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";

import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
  whiteList: [""],
  blackList: ["User"],
};

const rootReducer = combineReducers({
  User: userReducer,
  File: fileReducer,
});

export default persistReducer(persistConfig, rootReducer);
