import { createStore } from "redux";

import LoginReducers from "./State/reducers";

const store = createStore(LoginReducers);

export default store;