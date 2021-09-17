import * as type from '../types';

export const getArticle = ({start,end}) => {
  return {
    start,end,
    type: type.GET_ARTICLE_REQUESTED,
  }
}

export const postArticle = () => {
  return {
    type: type.POST_ARTICLE_REQUESTED,
  }
}

export const patchArticle = () => {
  return {
    type: type.PATCH_ARTICLE_REQUESTED,
  }
}

export const deleteArticle = () => {
  return {
    type: type.DELETE_ARTICLE_REQUESTED,
  }
}

export const openDialog = () => {
  return {
    type: type.OPEN_DIAGLOG
  }
}

export const closeDialog = () => {
  return {
    type: type.CLOSE_DIALOG
  }
}