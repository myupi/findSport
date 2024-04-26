import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { addAPI } from "src/services/AddService";

const rootReducer = combineReducers({
  [addAPI.reducerPath]: addAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(addAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
