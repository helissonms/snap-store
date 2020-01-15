import { all, takeLatest } from 'redux-saga/effects';
import requestApi from './requestApi';

export default function* sagas() {
  yield all([
    takeLatest('REQUEST_API', requestApi),
  ]);
};
