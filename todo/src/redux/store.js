import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createInjectorsEnhancer } from "redux-injectors";
import { combineReducers } from "redux";

const sagaMiddleware = createSagaMiddleware();

const createReducer = (injectedReducers = {}) => {
  return combineReducers({
    ...injectedReducers,
  });
};

const store = configureStore({
  reducer: createReducer(), 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  enhancers: (getDefaultEnhancers) => [
    ...getDefaultEnhancers(),
    createInjectorsEnhancer({
      createReducer,
      runSaga: sagaMiddleware.run,
    }),
  ],
});

export default store;
