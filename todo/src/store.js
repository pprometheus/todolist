import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sagaReducer from "./container/todoContainer/reducer";
import todoSaga from "./container/todoContainer/saga";
// import { rootSaga } from "./rootSaga";
// import todoReducer from "./reducers/reducer";
// import todoReducer from "./reducers/reducer";
// import { todos } from "./sagas/todoSaga";

const sagaMiddlware = createSagaMiddleware();
const store = configureStore({
    // reducer: sagaReducer,
    reducer:sagaReducer,
    middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(sagaMiddlware)
    
});


sagaMiddlware.run(todoSaga);
// sagaMiddlware.run(rootSaga);


export default store;