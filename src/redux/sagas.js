import { call, put, takeEvery } from 'redux-saga/effects';
import { Api } from 'Api/Api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchDog(action) {
  try {
    const user = yield call(Api.fetchDog, action.payload.userId);
    yield put({ type: 'DOG_FETCH_SUCCEEDED', user: user });
  } catch (e) {
    yield put({ type: 'DOG_FETCH_FAILED', message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery('DOG_FETCH_REQUESTED', fetchDog);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest('DOG_FETCH_REQUESTED', fetchDog);
// }

export default mySaga;
