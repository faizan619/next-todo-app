import { Task } from "@/app/(database)/models/task";
import { NextResponse } from "next/server";

// get all the tasks
export function GET() {}

// create all the tasks
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
    console.log(error);
    return NextResponse.json({
      message: "Failed to Create Task !!",
      success: false,
    });
  }
}
