const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('6411b761b0224cc9b5ab28e8439a5b77');

module.exports = {
    /**
     * find all news by country
     */
    getAllArticleByKeywords: (req, res) => {
        var keywordsParam = req.params.keywordsParam;
        newsapi.v2.everything({
            q: keywordsParam,
            sortBy: 'relevancy',
            pageSize : 50
        }).then(response => {
             console.log(response.articles);
            res.send(response.articles);
        }).catch(function (error) {
            console.log(error);
            res.send(error);
        });
    } ,
    /**
     * find all news by keyword and language
     */
    getAllArticleByKeywordsLanguage: (req, res) => {
        var keywordsParam = req.params.keywordsParam;
        var languageParam = req.params.languageParam;
        newsapi.v2.everything({
            q: keywordsParam,
            language: languageParam,
            sortBy: 'relevancy',
            pageSize : 50
        }).then(response => {
             console.log(response.articles);
            res.send(response.articles);
        }).catch(function (error) {
            console.log(error);
            res.send(error);
        });
    },
    /**
     * find all news by keyword and language and date from ...to
     */
    getAllArticleByKeywordsFromTo: (req, res) => {
        var keywordsParam = req.params.keywordsParam;
        var fromParam = req.params.fromParam;
        var toParam = req.params.toParam;              
        newsapi.v2.everything({
            q: keywordsParam,
            from: fromParam,
            to: toParam,
            sortBy: 'relevancy',
            pageSize : 50
        }).then(response => {
             console.log(response.articles);
            res.send(response.articles);
        }).catch(function (error) {
            console.log(error);
            res.send(error);
        });
    } ,
    /**
     * find all news by keyword and source
     */
    getAllArticleByKeywordsSource: (req, res) => {
        var keywordsParam = req.params.keywordsParam; 
        var sourceParam = req.params.sourceParam;                     
        newsapi.v2.everything({
            q: keywordsParam,
            source: sourceParam,
            pageSize : 50
        }).then(response => {
             console.log(response.articles);
            res.send(response.articles);
        }).catch(function (error) {
            console.log(error);
            res.send(error);
        });
    }  

}