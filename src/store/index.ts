import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import { useDispatch } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";
import { isDev } from "@/lib";
import { createLogger } from "redux-logger";

const loggerMiddleware: any = createLogger({
  predicate: () => isDev(),
  collapsed: true,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware, thunk),
});

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const persistor = persistStore(store);
