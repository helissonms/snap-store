import { createStore, compose, applyMiddleware } from "redux";
import createSaga from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSaga();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(sagas);

export default store;
