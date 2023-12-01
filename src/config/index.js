import dotenv from "dotenv"
dotenv.config()


const config ={
  PORT :process.env.PORT||7000,
  MONGO_URL:process.env.MONGO_URL,
  JWT_SECRET:process.env.JWT_SECRET,
  JWT_EXPIRY:process.env.JWT_EXPIRY
}

export default config