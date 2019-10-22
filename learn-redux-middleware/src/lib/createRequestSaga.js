import { call, put, delay } from 'redux-saga/effects';
import {startLoading, finishLoading}  from '../modules/loading';

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type));

    yield delay(3000)

    try {
      const res = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: res.data
      })
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true
      })
    }

    yield put(finishLoading(type))
  }
}