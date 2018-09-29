import { combineReducers } from 'redux'
import { RECEIVE_ARTICLES } from '../constants/ActionTypes'

const articles = (state, action) => {
     return state  
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ARTICLES:
      return {
        ...state,
        ...action.articles.reduce((obj, article) => {
          obj[article.id] = article
          return obj
        }, {})
      }
    default:
      const { articleId } = action
      if (articleId) {
        return {
          ...state,
          [articleId]: articles(state[articleId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ARTICLES:
      return action.articles.map(article => article.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getArticle = (state, id) =>
  state.byId[id]

export const getVisibleArticles = state =>
  state.visibleIds.map(id => getArticle(state, id))

