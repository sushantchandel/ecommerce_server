import express  from  "express"
const app = express();
import config from "./config/index.js"
import dbconnect from "./db/index.js";
const PORT  = config.PORT


app.listen(PORT,()=>{
    console.log(`SERVER is running on PORT : ${PORT}`)
})


