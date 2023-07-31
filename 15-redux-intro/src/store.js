import { combineReducers, createStore } from "redux";
import accountReducer from "./feature/account/accountSlice";
import customerReducer from "./feature/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
