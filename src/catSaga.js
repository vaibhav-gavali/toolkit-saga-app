import { call, put, takeEvery } from 'redux-saga/effects';
import { CATS_STATE, FUNC_GETS_CATS_FETCH, getCatsSuccess } from './catState';

function* workGetCatsFetch() {
  const cats = yield call(() => fetch('https://api.thecatapi.com/v1/breeds'));
  const formattedCats = yield cats.json();
  const formattedCatsShorts = formattedCats.slice(0, 10);
  yield put(getCatsSuccess(formattedCatsShorts));
}

function* catSaga() {
  yield takeEvery(`${CATS_STATE}/${FUNC_GETS_CATS_FETCH}`, workGetCatsFetch);
}

export default catSaga;
