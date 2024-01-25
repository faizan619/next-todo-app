import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
    title:{
        type:String,
        required:[true,"Title is Required"]
    },
    content:{
        type:String,
        required:[true,"Content is Required"]
    }
    // userId:{
    //     type:mongoose.
    // }
})