import dotenv from "dotenv"
dotenv.config()


const config ={
  PORT :process.env.PORT||7000,
  MONGO_URL:process.env.MONGO_URL
}

export default config