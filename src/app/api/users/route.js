// import { connectDB } from "@/app/(database)/conn/db";
import { User } from "@/app/(database)/models/user";
import { NextResponse } from "next/server";

// connectDB()

export async function GET(){
    let users = []
    try {
        users = await User.find()
        return NextResponse.json(users)
    } catch (error) {
        console.log("Error While Fetching the Data")
        return NextResponse.json({
            message:"Cannot Fetch Data from Database",
            status:false
        })
    }
}

export async function POST(request){
    const {name,email,password} = await request.json()
    const user = new User({
        name,
        email,
        password
    });
    try {
        const createUser = await user.save()
        const response = NextResponse.json(user,{status:201})
        return response;
    } catch (error) {
        // console.log("Error While Posting the Data",error)
        if (error.name === 'ValidationError' && error.errors && error.errors.email) {
            console.log("Invalid email address entered:", error.errors.email.message);
        }
        
        if (error.name === 'ValidationError' && error.errors && error.errors.password) {
            console.log("Invalid password entered:", error.errors.password.message);
        }
        
        return NextResponse.json({
            message:"Cannot Post the Data!!",
            status:false
        })
    }
}