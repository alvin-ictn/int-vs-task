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
      let newPostData = JSON.parse(JSON.stringify(state.article));
      newPostData.unshift(action.article)
      return { ...state, loading: false, article: newPostData }
    case type.POST_ARTICLE_FAILED:
      return { ...state, loading: false, error: action.message }

    case type.PATCH_ARTICLE_REQUESTED:
      return { ...state, loading: true }
    case type.PATCH_ARTICLE_SUCCESS:
      const index = state.article.findIndex((obj => obj.id == action.article.id));
      let newPatchData = JSON.parse(JSON.stringify(state.article));
      newPatchData[index].title = action?.article?.title;
      newPatchData[index].body = action?.article?.body;

      return { ...state, loading: false, article: newPatchData }
    case type.PATCH_ARTICLE_FAILED:
      return { ...state, loading: false, error: action.message }

    case type.DELETE_ARTICLE_REQUESTED:
      return { ...state, loading: true }
    case type.DELETE_ARTICLE_SUCCESS:
      const newArray = state.article.filter((obj => obj.id !== action.article.id.payload));
      return { ...state, loading: false, article: newArray }
    case type.DELETE_ARTICLE_FAILED:
      return { ...state, loading: false, error: action.message }

    case type.OPEN_DIAGLOG:
      const { data, mode } = action.payload
      return { ...state, dialog: true, oldData: data, mode: mode };
    case type.CLOSE_DIALOG:
      return { ...state, dialog: false };

    default:
      return state;
  }
}

export default articleReducer