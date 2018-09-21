/** */

import articles from '../api/articleMock'
import * as types from '../constants/ActionTypes'

import axios from 'axios'
//const url = "http://localhost:5000/api/"
const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:5000/api/"

const countryParam = "us";

export let startDevSearch = () => {
    return {
        type : 'Start_Dev_Search'
    }
}

export let endDevSearch = (devsArray) => {
    return {
        type : 'End_Dev_Search',
        devsArray
    }
}

//fetch the list of our developers
export let fetchDev = () => {
    return (dispatch) => {
        dispatch(startDevSearch())
        return axios.get(`${url}article/${countryParam}`).then(
            (response) => {
                let devsArr = response.data.items.slice(0,10)
                dispatch(endDevSearch(devsArr))
            },
            (err) => {
                console.log(err);
            }
        )

    }
}

const receiveArticles = arts => ({
  type: types.RECEIVE_ARTICLES,
  arts
})

export const getAllArticles = () => dispatch => {
  articles.getArticlesMock(arts => {
    dispatch(receiveArticles(arts))
  })
}


