import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected With Database")

    } catch (error) {
        console.log("Cannot Connect with Database : ",error)
    }
}