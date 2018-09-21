import { combineReducers } from 'redux'
import { RECEIVE_ARTICLES, ADD_TO_CART,RECEIVE_ARTICLES_PARAM } from '../constants/ActionTypes'

const articles = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    default:
      return state
  }
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
      case RECEIVE_ARTICLES_PARAM:
        return {
        ...state,
         articles: action.articles
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
     case RECEIVE_ARTICLES_PARAM:
       return action.articles
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

