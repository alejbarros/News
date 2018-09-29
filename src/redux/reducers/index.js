import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import articles, * as fromArticles from './articles'

export default combineReducers({
  cart,
  articles
})

const getAddedIds = state => fromCart.getAddedIds(state.cart)

const getArticles = (state, id) => fromArticles.getArticle(state.articles, id)


export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getArticles(state, id)  
  }))


