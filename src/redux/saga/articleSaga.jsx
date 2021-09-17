import { call, put, takeEvery, all } from 'redux-saga/effects'
import * as type from '../types'
import { API } from '../../global/api_endpoint'

const generate = (start, end) => {
   return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

export const fetchGetArticle = async (id) => {
   try {
      const response = await fetch(API.GET_BY_ID(id), { method: "GET" })
      const data = await response.json()
      if (response.status === 200) return data
      return false
   }
   catch (e) {
      console.log('Error', e.response.data)
   }
}

function* handleGetArticle({ start, end }) {
   try {
      const article = yield all([...generate(start, end).map(num => call(fetchGetArticle, num))]);
      yield put({ type: type.GET_ARTICLE_SUCCESS, article });
   } catch (e) {
      yield put({ type: type.GET_ARTICLE_FAILED, message: e.message });
   }
}

export const fetchPatchArticle = async ({ data }) => {
   const { id, title, body } = data;
   
   try {
      const response = await fetch(API.EDIT(id), {
         method: "PATCH",
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         }, body: JSON.stringify({title, body})
      });
      const jsonData = await response.json();

      console.log("PATCH", response, jsonData);

      if (response.status === 200) return jsonData
      return false
   }
   catch (e) {
      console.log('Error', e.response.data)
   }
}

function* handlePatchArticle(data) {
   console.log("HANDLE", data)
   try {
      console.log("test")
      const article = yield call(fetchPatchArticle, data)
      yield put({ type: type.PATCH_ARTICLE_SUCCESS, article });
   } catch (e) {
      console.log("HERE");
      yield put({ type: type.PATCH_ARTICLE_FAILED, message: e.message });
   }
}

function* watcherArticleSaga() {
   yield takeEvery(type.GET_ARTICLE_REQUESTED, handleGetArticle);
   yield takeEvery(type.PATCH_ARTICLE_REQUESTED, handlePatchArticle)
}



export default watcherArticleSaga;