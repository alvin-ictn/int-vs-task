import * as type from '../types';

const initialState = {
  article: [],
  loading: false,
  error: null,
}

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_ARTICLE_REQUESTED:
      return { ...state, loading: true }
    case type.GET_ARTICLE_SUCCESS:
      return { ...state, loading: false, article: [...state.article, action.article] }
    case type.GET_ARTICLE_FAILED:
      return { ...state, loading: false, error: action.message }

    case type.POST_ARTICLE_REQUESTED:
      return { ...state, loading: true }
    case type.POST_ARTICLE_SUCCESS:
      return { ...state, loading: false, article: action.body }
    case type.POST_ARTICLE_FAILED:
      return { ...state, loading: false, error: action.message }

    case type.PATCH_ARTICLE_REQUESTED:
      return { ...state, loading: true }
    case type.PATCH_ARTICLE_SUCCESS:
      return { ...state, loading: false, article: action.body }
    case type.PATCH_ARTICLE_FAILED:
      return { ...state, loading: false, error: action.message }

    case type.DELETE_ARTICLE_REQUESTED:
      return { ...state, loading: true }
    case type.DELETE_ARTICLE_SUCCESS:
      return { ...state, loading: false, article: action.body }
    case type.DELETE_ARTICLE_FAILED:
      return { ...state, loading: false, error: action.message }

    default:
      return state
  }
}

export default articleReducer