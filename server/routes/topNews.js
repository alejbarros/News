const service = require('../service/topNewService')
const multipart = require('connect-multiparty')
const multipartWare = multipart()
module.exports = (router) => {

    /**
     * get Top articles of the specified country.
     */
    router
        .route('/getTopNewsByCountry/:countryParam')
        .get(service.getTopArticleByCountry)
     /**
     * get Top articles of the differents categories
     */
    router
        .route('/getTopNewsByCategory/:categoryParam')
        .get(service.getTopArticleByCategory)
     /**
     * get Top articles of the differents categories and countries
     */
    router
        .route('/getTopNewsByCategoryCountry/:categoryParam/:countryParam')
        .get(service.getTopArticleByCategoryCountry)
     /**
     * get Top articles by sources
     */
    router
        .route('/getTopNewsBySource/:sourceParam')
        .get(service.getTopArticleBySource)
     /**
     * get Top articles by Keywords
     */
    router
        .route('/getTopNewsByKeywords/:keywordsParam')
        .get(service.getTopArticleByKeywords)
    /**
     * get Top articles by language
     */
    router
        .route('/getTopNewsByLanguage/:languageParam')
        .get(service.getTopArticleByLanguage)  
    
    /**
     * get Top articles by language & Keywords
     */
    router
        .route('/getTopNewsByLanguageKeyword/:languageParam/:keywordsParam')
        .get(service.getTopArticleByLanguageKeyword)
    
    
}