const service = require('../service/allNewService')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {
    /**
    * * get All articles of the specified keyword.
    */
    router
        .route('/getAllNewsByKeywords/:keywordsParam')
        .get(service.getAllArticleByKeywords)
    /**
    * * get All articles of the specified keyword and language.
    */
    router
        .route('/getAllNewsByKeywordsLanguage/:keywordsParam/:languageParam')
        .get(service.getAllArticleByKeywordsLanguage)

    /**
    * * get All articles of the specified keyword and dates From and To.
    */
    router
        .route('/getAllNewsByKeywordsFromTo/:keywordsParam/:fromParam/:toParam')
        .get(service.getAllArticleByKeywordsFromTo)
    /**
    * * get All articles of the specified keyword and source.
    */
    router
        .route('/getAllNewsBySource/:keywordsParam/:sourceParam')
        .get(service.getAllArticleByKeywordsSource)

}