// server/routes/index.js
const topNews = require('./topNews')
const allNews = require('./allNews')
const sourceNews = require('./sourceNews')

module.exports = (router) => {
    topNews(router),
    allNews(router),
    sourceNews(router)
}