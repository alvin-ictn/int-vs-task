import * as type from '../types';

export const getArticle = ({start,end}) => {
  return {
    payload: { start, end },
    type: type.GET_ARTICLE_REQUESTED,
  }
}

export const postArticle = (data) => {
  return {
    payload: data,
    type: type.POST_ARTICLE_REQUESTED,
  }
}

export const patchArticle = (data) => {
  return {
    payload: data,
    type: type.PATCH_ARTICLE_REQUESTED,
  }
}

export const deleteArticle = (id) => {
  return {
    payload: id,
    type: type.DELETE_ARTICLE_REQUESTED,
  }
}

