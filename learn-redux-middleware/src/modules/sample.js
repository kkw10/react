import { call, put, takeLatest, delay } from 'redux-saga/effects';
import * as api from '../lib/api';
import createRequestSaga from '../lib/createRequestSaga';

export const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

export const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

export const getPost = (id) => (
  {
    type: GET_POST,
    payload: id
  }
)

export const getUsers = () => (
  {
    type: GET_USERS
  }
)

const getPostSaga = createRequestSaga(GET_POST, api.getPost)
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers)

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

const initialState = {
  post: null,
  users: null
}

const sample = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: action.payload
      }
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      }
    default:
      return state;
  }
}

export default sample;