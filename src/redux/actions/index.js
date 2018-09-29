import shop from '../api/shop'
import * as types from '../constants/ActionTypes'
import axios from 'axios'
//const url = "http://localhost:5000/api/"
const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:5000/api/"
const countryParam = "us"

const receiveArticles = articles => ({
 type: types.RECEIVE_ARTICLES,
 articles
})

export const getAllArticles = () => dispatch => {
  
  axios.get(`${url}getTopNewsByCountry/${countryParam}`).then(response => {
    var res = response.data;
    res.forEach(function(element) {
      element.id = Math.random();      
    });
    dispatch(receiveArticles(res));
  }).catch(function (error) {
    console.log(error);      
  }); 
}


export const getTopArticlesByCountry = (country) => dispatch => {
  
  axios.get(`${url}getTopNewsByCountry/${country}`).then(response => {
    var res = response.data;
    res.forEach(function(element) {
      element.id = Math.random();      
    });
    dispatch(receiveArticles(res));
  }).catch(function (error) {
    console.log(error);      
  }); 
}

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
