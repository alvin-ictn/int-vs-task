import * as type from '../types';

const initialState = {
  article: [],
  loading: false,
  error: null,
  dialog: false,
  mode: '',
  oldData: {},
  patchData: {}
}

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_ARTICLE_REQUESTED:
      return { ...state, loading: true }
    case type.GET_ARTICLE_SUCCESS:
      return { ...state, loading: false, article: [...state.article, ...action.article] }
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
      const index = state.article.findIndex(obj => obj.id == action.article.id);
      let article = state.article;
      article[index].title = action?.article?.title;
      article[index].body = action?.article?.body;
      return { ...state, loading: false, article: article }
    case type.PATCH_ARTICLE_FAILED:
      return { ...state, loading: false, error: action.message }

    case type.DELETE_ARTICLE_REQUESTED:
      return { ...state, loading: true }
    case type.DELETE_ARTICLE_SUCCESS:
      const newArray = state.article.filter((obj => obj.id !== action.article.id.id));
      return { ...state, loading: false, article: newArray }
    case type.DELETE_ARTICLE_FAILED:
      return { ...state, loading: false, error: action.message }

    case type.OPEN_DIAGLOG:
      return { ...state, dialog: true, oldData: action.data, mode: action.mode};
    case type.CLOSE_DIALOG:
      return { ...state, dialog: false};
    default:
      return state;
  }
}

export default articleReducer