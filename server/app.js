/** require dependencies */
const express = require("express")
const routes = require('./routes/')
const cors = require('cors')

const app = express()
const router = express.Router()
let port = 5000 || process.env.PORT
/** set up routes {API Endpoints} */
routes(router)
/** set up middlewares */

app.use(cors());
app.options('*', cors());

app.use('/api', router)

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});