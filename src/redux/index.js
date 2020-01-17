import { createStore, compose, applyMiddleware } from "redux";
import createSaga from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSaga();

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : compose;

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools()
  )
);

sagaMiddleware.run(sagas);

export default store;
