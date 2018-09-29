import { combineReducers } from 'redux'
import articles, * as fromArticles from './articles'

export default combineReducers({
  articles
})

const getArticles = (state, id) => fromArticles.getArticle(state.articles, id)





