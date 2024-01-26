import { getResponseMessage } from "@/app/(database)/conn/responseMessage";
import { Task } from "@/app/(database)/models/task";
import { NextResponse } from "next/server";

export async function GET() {
  let tasks = [];
  try {
    tasks = await Task.find();
    return NextResponse.json(tasks);
  } catch (error) {
    console.log("Error While Fetching the Tasks");
    return getResponseMessage("Error in Getting Task Data !!", 404, false);
  }
}

export async function POST(request) {
  const { title, content, userId } = await request.json();

  try {
    const task = new Task({
      title,
      content,
      userId,
    });
    const createdTask = await task.save();
    return NextResponse.json(createdTask, {
      status: 201,
    });
  } catch (error) {
    console.log("failed to create task : ", error);
    return getResponseMessage("Failed to Create Task",500,false)
  }
}
