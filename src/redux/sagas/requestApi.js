import { put, call } from "redux-saga/effects";
import http from '../../services/http';

export default function* requestApi({ payload }) {
  const { types, path, method, data, config } = payload;

  const [REQUESTING, SUCCESS, FAILURE] = types;

  try {
    yield put({ type: REQUESTING });

    const response = yield call(http[method], path, data || config, config);

    yield put({ type: SUCCESS, payload: response.data });

  } catch (error) {
    if (error.response) {
      yield put({ type: FAILURE, payload: error.response.data.result });
    } else {
      yield put({ type: FAILURE, payload: error });
    }
  }
}
