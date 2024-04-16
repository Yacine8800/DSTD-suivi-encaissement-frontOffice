import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../auth/user/user.reducer";
import mailReducer from "../auth/sendmail/mail.reducer";

export const persistConfig = {
  key: "suivi-encaissement",
  storage,
  whitelist: ["user", "mail"],
  blacklist: [],
};

const topReducer = combineReducers({
  user: userReducer,
  mail: mailReducer,
});

const rootReducer = (state: any, action: any) => {
  // when RESET action is dispatched it will reset redux state
  // if (action.type === authTypes.LOGOUT) {
  //   state = undefined;
  // }
  return topReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
