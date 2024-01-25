import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name:{
        type:String,
        required:[true,"Everyone has a name !!"],
    },
    email:{
        type: String,
        validate: {
            validator: function (v) {
                return /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(v);
            },
            message: (props) => `${props.value} is not a valid email address!`,
        },
        required: [true, "Email is Compulsory :)"],
        unique: true,
      },
    password: {
        type: String,
        required: [true, "Password is Compulsory !!"],
        minLength: [6, "minimum 6 character is required !!"],
        maxLength: [
          20,
          "maximum 20 character else you won't remember the password ;)",
        ],
      },
})

export const User = mongoose.models.users || mongoose.model("users",UserSchema)