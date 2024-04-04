import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
//routes import 

import userRouter from "./routes/user.routes.js"
import workerRouter from "./routes/worker.routes.js"

const app = express()

app.use(cors( {
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



//routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/workers", workerRouter)


// http://localhost:5000/api/v1/users/register

export { app }