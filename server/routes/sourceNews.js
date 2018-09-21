const service = require('../service/sourceNewService')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {
    /**
    * * get all sources 
    */
   router
   .route('/getSourceAll/:categoryParam/:languageParam/:countryParam')
   .get(service.getSourceAll)
}