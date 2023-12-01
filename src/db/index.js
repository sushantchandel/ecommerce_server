import mongoose from "mongoose"
import config from "../config/index.js"

const dbconnect =(async()=>{
    try{
        await mongoose.connect(config.MONGO_URL,{
            family:4
        })
        console.log('Database is connected');
    }catch(err){
        console.error(err)
        console.log("something went wrong")
        throw err;
    }
})()

export default dbconnect