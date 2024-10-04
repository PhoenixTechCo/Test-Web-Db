import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin : process.nextTick.CORS_ORIGIN,
    Credential : true
}))




app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import

import pRouter from './routes/projectfeed.routes.js'

//route decleartion
app.use("/api/v1/projects", pRouter)


export { app }