import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
    title:{
        type:String,
        required:[true,"Title is Required"]
    },
    content:{
        type:String,
        required:[true,"Content is Required"]
    },
    addedDate:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    status:{
        type:String,
        enum:["pending","completed"],
        default:"pending"
    },

    userId:{
        type:mongoose.ObjectId,
        required:true
    }
});

export const Task = mongoose.models.tasks || mongoose.model("tasks",TaskSchema)