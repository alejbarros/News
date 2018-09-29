const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('6411b761b0224cc9b5ab28e8439a5b77');

module.exports = {
    /**
     * find all sources 
     */
    getSourceAll: (req, res) => {
        var languageParam = req.params.languageParam;
        var categoryParam = req.params.categoryParam;
        var countryParam = req.params.countryParam;
        newsapi.v2.sources({
            category: categoryParam,
            language: languageParam,
            country: countryParam
          }).then(response => {
            console.log(response.articles);
            res.send(response.articles);
        }).catch(function (error) {
            console.log(error);
            res.send(error);
        });
    } 


} 