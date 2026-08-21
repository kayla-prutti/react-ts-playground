"use client";
import { useReducer, useState } from "react";
interface Task { id: number; title: string; completed: boolean; }
type TaskAction = { type: "added"; title: string } | { type: "toggled"; id: number } | { type: "removed"; id: number };
function taskReducer(tasks: Task[], action: TaskAction): Task[] { /* TODO: Handle each action with map, filter, or a new item. */ return tasks; }
export default function ReducerTaskBoard() {
  const [tasks, dispatch] = useReducer(taskReducer, []); const [title, setTitle] = useState("");
  return <main><h1>Reducer task board</h1><p className="walkthrough">Walkthrough: I centralize related state updates in a reducer and send descriptive actions with dispatch.</p><form onSubmit={(event) => { event.preventDefault(); /* TODO: dispatch an added action. */ }}><input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="New task" /><button type="submit">Add</button></form><p>{tasks.length} tasks</p></main>;
}
