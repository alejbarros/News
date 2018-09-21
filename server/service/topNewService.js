const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('6411b761b0224cc9b5ab28e8439a5b77');

module.exports = {
    /**
     * find top news by country
     */
    getTopArticleByCountry: (req, res) => {
        var countryParam = req.params.countryParam;
        newsapi.v2.topHeadlines({
            country: countryParam
        }).then(response => {
             console.log(response.articles);
            res.send(response.articles);
        }).catch(function (error) {
            console.log(error);
            res.send(error);
        });
    },
    /**
     * find top news by categories
     */
    getTopArticleByCategory: (req, res,) => {
        var categoryParam = req.params.categoryParam;
        newsapi.v2.topHeadlines({
            category: categoryParam
        }).then(response => {
             console.log(response.articles);
            res.send(response.articles);
        }).catch(function (error) {
            console.log(error);
            res.send(error);
        });
    },
     /**
     * find top news by category and country 
     */
    getTopArticleByCategoryCountry: (req, res) => {
        var categoryParam = req.params.categoryParam;
        var countryParam = req.params.countryParam;
        newsapi.v2.topHeadlines({
            category: categoryParam,
            country: countryParam
        }).then(response => {
             console.log(response.articles);
            res.send(response.articles);
        }).catch(function (error) {
            console.log(error);
            res.send(error);
        });
    },
     /**
     * find top news by source 
     */
    getTopArticleBySource: (req, res) => {
        var sourceParam = req.params.sourceParam;
        newsapi.v2.topHeadlines({
            sources: sourceParam
        }).then(response => {
             console.log(response.articles);
            res.send(response.articles);
        }).catch(function (error) {
            console.log(error);
            res.send(error);
        });
    },
    /**
    * find top news by keywords 
    */
   getTopArticleByKeywords: (req, res) => {
       var keywordsParam = req.params.keywordsParam;
       newsapi.v2.topHeadlines({
           q: keywordsParam
       }).then(response => {
            console.log(response.articles);
           res.send(response.articles);
       }).catch(function (error) {
           console.log(error);
           res.send(error);
       });
   },
    /**
    * find top news by language
    */
   getTopArticleByLanguage: (req, res) => {
        var languageParam = req.params.languageParam;
        newsapi.v2.topHeadlines({
        language: languageParam,
        pageSize: 50
        }).then(response => {
            console.log(response.articles);
            res.send(response.articles);
        }).catch(function (error) {
            console.log(error);
            res.send(error);
        });
    },
    /**
    * find top news by language and keyword
    */
   getTopArticleByLanguageKeyword: (req, res) => {
        var languageParam = req.params.languageParam;
        var keywordsParam = req.params.keywordsParam;
        newsapi.v2.topHeadlines({
        language: languageParam,
        q :keywordsParam
        }).then(response => {
            console.log(response.articles);
            res.send(response.articles);
        }).catch(function (error) {
            console.log(error);
            res.send(error);
        });
    }

}