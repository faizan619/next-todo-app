import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { User } from "@/app/(database)/models/user";

export async function GET(request){
    const loginToken = request.cookies.get("loginToken")?.value;
    console.log("login token : ",loginToken)

    const data = jwt.verify(loginToken,process.env.JWT_KEY);
    console.log(data);

    const usersInfo = await User.findById(data._id)

    return NextResponse.json({
        token:loginToken,
        userData:usersInfo
    })
}