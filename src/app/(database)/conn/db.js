import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected with Database")

    } catch (error) {
        console.log("cannot connect with mongoDb : ",error);
    }
}