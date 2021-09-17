import { call, put, takeEvery } from 'redux-saga/effects'
import * as type from '../types' 
import { API } from '../../global/api_endpoint'
export const fetchGetArticle = async () => {
   try {
     const response = await fetch(API.GET_BY_ID(2), { method: "GET"})
     const data = await response.json() 

     if(response.status === 200) return data
     return false
   }
  catch(e) {
     console.log('Error', e.response.data)
  }
}

function* handleGetArticle() {
   try {
      const article = yield call(fetchGetArticle);
      yield put({type: type.GET_ARTICLE_SUCCESS, article: article});
   } catch (e) {
      yield put({type: type.GET_ARTICLE_FAILED, message: e.message});
   }
}

function* watcherArticleSaga() {
   yield takeEvery(type.GET_ARTICLE_REQUESTED, handleGetArticle);
}

export default watcherArticleSaga;