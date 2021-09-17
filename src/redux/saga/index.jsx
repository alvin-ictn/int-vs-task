import { all } from 'redux-saga/effects'
import watcherArticleSaga from './articleSaga'
export default function* rootSaga() {
  yield all([
    watcherArticleSaga()
  ])
}