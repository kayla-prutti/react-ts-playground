"use client";

import { useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function TaskManager() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  // TODO: Add a task when the form is submitted.
  // TODO: Do not add empty tasks.
  // TODO: Toggle a task's completed value when it is clicked.
  // TODO: Render an empty state when tasks is empty.

  return (
    <main>
      <h1>Task manager</h1>
      <p className="walkthrough">
        Walkthrough: I will define the Task shape, then update the task array without mutating it.
      </p>
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="task-title">New task</label>
        <input id="task-title" value={title} onChange={(event) => setTitle(event.target.value)} />
        <button type="submit">Add task</button>
      </form>
      <p>{tasks.length} tasks</p>
      {/* Render tasks here. */}
    </main>
  );
}
