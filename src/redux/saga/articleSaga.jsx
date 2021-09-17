import { call, put, takeEvery,all } from 'redux-saga/effects'
import * as type from '../types' 
import { API } from '../../global/api_endpoint'
export const fetchGetArticle = async (id) => {
   try {
     const response = await fetch(API.GET_BY_ID(id), { method: "GET"})
     const data = await response.json() 

     if(response.status === 200) return data
     return false
   }
  catch(e) {
     console.log('Error', e.response.data)
  }
}
const generate = (start, end) => {
   return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
function* handleGetArticle({start, end}) {
   try {
      const article = yield all([...generate(start,end).map(num =>  call(fetchGetArticle, num))]);
      yield put({type: type.GET_ARTICLE_SUCCESS, article: article});
   } catch (e) {
      yield put({type: type.GET_ARTICLE_FAILED, message: e.message});
   }
}

function* watcherArticleSaga() {
   yield takeEvery(type.GET_ARTICLE_REQUESTED, handleGetArticle);
}

export default watcherArticleSaga;