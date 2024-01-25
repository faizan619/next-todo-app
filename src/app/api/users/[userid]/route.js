import { User } from "@/app/(database)/models/user";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userid } = params;
  try {
    const user = await User.findById(userid);
    return NextResponse.json(user);
  } catch (e) {
    console.log("cannot fetch the user : ", e);
    return NextResponse.json({
      message: "cannot find user",
      status: false,
    });
  }
}

export async function PUT(request,{params}){
    const {userid} = params
    const {name,email,password} = await request.json()
    try {
        const user = await User.findById(userid);
        user.name = name
        user.password = password

        const updateUser = await user.save();
        return NextResponse.json(updateUser)
    } catch (error) {
        return NextResponse.json({
            message:"Failed to pdate user !!",
            success:false
        })
    }
}

export async function DELETE(request,{params}){
    const {userid} = params
    try {
        await User.deleteOne({
            _id:userid
        })
        return NextResponse.json({
            message:"User Deleted Successfully",
            success:true
        })
    } catch (error) {
        console.log("error while deleting the user : ",error);
        return NextResponse.json({
            message:"Error in Deleting User !!",
            success:false
        })
    }
}
