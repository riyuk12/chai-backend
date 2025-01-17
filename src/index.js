import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js"
import { app } from "./app.js";

dotenv.config({
    path:"./env"
})


connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("server error",error)
        throw error
    })

    app.listen(process.env.PORT||8000,()=>{
        console.log(`\n server running on port ${process.env.PORT||8000}`)
    })
}
).catch((e)=>{
    console.log(`error: ${e}`)
})


//first approach
// import express from "express"
// const app=express()
// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("errr",error)
//             throw error
//         })

//         app.listen(process.env.PORT || 8000,()=>{
//             console.log(`app listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.log("error",error)
//         throw error
//     }
// })()