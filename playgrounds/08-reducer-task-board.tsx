"use client";

import { useReducer, useState } from "react";
interface Task {
  id: string;
  title: string;
  completed: boolean;
}

type TaskAction =
  | { type: "added"; title: string }
  | { type: "toggled"; id: string }
  | { type: "removed"; id: string };

function taskReducer(tasks: Task[], action: TaskAction): Task[] {
  /* TODO: Handle each action with map, filter, or a new item. */
  switch (action.type) {
    case "added":
      const newTask = {
        id: crypto.randomUUID(),
        title: action.title,
        completed: false,
      };
      return [...tasks, newTask];
    case "toggled":
      return tasks.map((task) =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      );
    case "removed":
      return tasks.filter((task) => task.id !== action.id);
  }
}

export default function ReducerTaskBoard() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [title, setTitle] = useState("");

  const handledAdd = (e: React.FormEvent<HTMLFormElement>, title: string) => {
    e.preventDefault();
    dispatch({ type: "added", title: title });
    setTitle("");
  };

  const handledToggled = (id: string) => {
    dispatch({ type: "toggled", id: id });
  };

  const handledRemoved = (id: string) => {
    dispatch({ type: "removed", id: id });
  };

  return (
    <main>
      <h1>Reducer task board</h1>
      <p className="walkthrough">
        Walkthrough: I centralize related state updates in a reducer and send
        descriptive actions with dispatch.
      </p>
      <form onSubmit={(e) => handledAdd(e, title)}>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="New task"
        />
        <button type="submit">Add</button>
      </form>
      <p>{tasks.length} tasks</p>
      {tasks.map((t) => (
        <div key={t.id} style={{ display: "flex" }}>
          <p>{t.title}</p>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => handledToggled(t.id)}
          />
          <button onClick={() => handledRemoved(t.id)}>x</button>
        </div>
      ))}
    </main>
  );
}
