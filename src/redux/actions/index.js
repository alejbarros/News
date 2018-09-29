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

export const getTopNews = (data) => dispatch => {
  var category = data.category;
  var language = data.language;
  var country = data.country;
  var keyword = data.keyword;
  let urlService;
  if (category !== '' && country !== ''){
    urlService = `${url}getTopNewsByCategoryCountry/${category}/${country}`;
  }else if (keyword !=='' && language !== ''){
    urlService = `${url}getTopNewsByLanguageKeyword/${language}/${keyword}`;
  }else if (category !==''){
    urlService = `${url}getTopNewsByCategory/${category}`;
  }else if (country !==''){
    urlService = `${url}getTopNewsByCountry/${country}`;
  }else if (keyword !==''){
    urlService = `${url}getTopNewsByKeywords/${keyword}`;
  }else if (language !==''){
    urlService = `${url}getTopNewsByLanguage/${language}`;
  }

  axios.get(urlService).then(response => {
    var res = response.data;
    res.forEach(function(element) {
      element.id = Math.random();      
    });
    dispatch(receiveArticles(res));
  }).catch(function (error) {
    console.log(error);      
  });   
}

export const getLatestNews = (data) => dispatch => {
  var language = data.language;
  var keyword = data.keyword;
  let urlService;
  if (keyword !=='' && language !== ''){
    urlService = `${url}getAllNewsByKeywordsLanguage/${keyword}/${language}`;
  } else if (keyword !==''){
    urlService = `${url}/getAllNewsByKeywords/${keyword}`;
  }
  axios.get(urlService).then(response => {
    var res = response.data;
    res.forEach(function(element) {
      element.id = Math.random();      
    });
    dispatch(receiveArticles(res));
  }).catch(function (error) {
    console.log(error);      
  });   
}

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
    
  })
}
