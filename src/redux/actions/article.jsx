import * as type from '../types';

export const getArticle = ({start,end}) => {
  return {
    start,end,
    type: type.GET_ARTICLE_REQUESTED,
  }
}

export const postArticle = (data) => {
  return {
    data,
    type: type.POST_ARTICLE_REQUESTED,
  }
}

export const patchArticle = (data) => {
  return {
    data,
    type: type.PATCH_ARTICLE_REQUESTED,
  }
}

export const deleteArticle = (id) => {
  return {
    id,
    type: type.DELETE_ARTICLE_REQUESTED,
  }
}

