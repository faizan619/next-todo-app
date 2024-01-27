"use client";

import { addTask } from "@/services/taskService";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
  // document.title = metadata.title

  let [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "65b2aa38939b3d3640ccad46",
  });
  // 65b29b74535b064ffb862814
  // 65b2aa38939b3d3640ccad46

  const handleAddTask = async (event) => {
    event.preventDefault();

    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("Your task is added !! ", {
        position: "top-center",
      });
      setTask({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("Error not added !!", {
        position: "top-center",
      });
    }
  };
  return (
    <div className="flex flex-col items-center gap-2">
      <h1>Create Your Task</h1>
      <form
        onSubmit={handleAddTask}
        className="flex flex-col gap-3 border px-5 py-5 rounded-lg"
      >
        <label>
          <p>Title</p>
          <input
            className="text-black px-2 rounded-md py-1"
            type="text"
            placeholder="Enter Title"
            name="task_title"
            value={task.title}
            onChange={(e) => {
              setTask({
                ...task,
                title: e.target.value,
              });
            }}
          />
        </label>
        <label>
          <p>Content</p>
          <textarea
            className="text-black px-2 rounded-md py-1 w-full "
            type="text"
            placeholder="Enter Content"
            name="task_content"
            value={task.content}
            onChange={(e) => {
              setTask({
                ...task,
                content: e.target.value,
              });
            }}
          />
        </label>
        <label>
          <p>Status</p>
          <select
            className="text-black px-2 py-1 rounded-md w-full"
            required
            name="task_status"
            onChange={(e) => {
              setTask({
                ...task,
                status: e.target.value,
              });
            }}
            value={task.status}
          >
            <option value="none" disabled>
              --Select State--
            </option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </label>

        <div className="my-2 flex justify-evenly">
          <button
            type="submit"
            className="border px-3 text-green-600 border-green-600 hover:bg-green-600 hover:text-white hover:border-white transition-all py-1 rounded-md"
          >
            Submit
          </button>
          <button
            type="reset"
            className="border border-red-600 text-red-600 px-3 py-1 rounded-md hover:bg-red-600 hover:text-white hover:border-white"
          >
            Clear
          </button>
        </div>
        {/* <p>{task.title}</p>
        <p>{task.content}</p>
        <p>{task.status}</p>*/}
        {/* {JSON.stringify(task)}  */}
      </form>
    </div>
  );
}
