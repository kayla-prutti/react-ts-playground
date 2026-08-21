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
  function onAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (title.trim() !== "") {
      const newTask: Task = {
        id: tasks.length + 1,
        title: title,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
    }
  }

  function handleTaskCompletion(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <main>
      <h1>Task manager</h1>
      <p className="walkthrough">
        Walkthrough: I will define the Task shape, then update the task array
        without mutating it.
      </p>
      <form onSubmit={onAddTask}>
        <label htmlFor="task-title">New task</label>
        <input
          id="task-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <p>{tasks.length} tasks</p>
      {tasks.map((task) => (
        <div key={task.id} style={{ display: "flex", gap: "8px" }}>
          <p>{task.title}</p>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleTaskCompletion(task.id)}
          />
        </div>
      ))}
    </main>
  );
}
