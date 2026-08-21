"use client";

import { useState } from "react";
import FilterableProductList from "../playgrounds/01-filterable-product-list";
import UserProfileLoader from "../playgrounds/02-user-profile-loader";
import CounterStepper from "../playgrounds/03-counter-stepper";
import TaskManager from "../playgrounds/04-task-manager";
import ShoppingCart from "../playgrounds/05-shopping-cart";

const exercises = [
  { id: "products", number: "01", title: "Filterable product list", skills: "useState · derived data · lists", file: "playgrounds/01-filterable-product-list.tsx", status: "Complete" },
  { id: "profile", number: "02", title: "User profile loader", skills: "interface · useState · useEffect", file: "playgrounds/02-user-profile-loader.tsx", status: "Next up" },
  { id: "counter", number: "03", title: "Counter stepper", skills: "useState · events · numbers", file: "playgrounds/03-counter-stepper.tsx", status: "Build from scratch" },
  { id: "tasks", number: "04", title: "Task manager", skills: "interface · forms · arrays", file: "playgrounds/04-task-manager.tsx", status: "Build from scratch" },
  { id: "cart", number: "05", title: "Shopping cart", skills: "interface · state updates · reduce", file: "playgrounds/05-shopping-cart.tsx", status: "Build from scratch" },
];

export default function Home() {
  const [selectedId, setSelectedId] = useState("products");
  const selected = exercises.find((exercise) => exercise.id === selectedId)!;
  const Exercise = selectedId === "products" ? FilterableProductList
    : selectedId === "profile" ? UserProfileLoader
    : selectedId === "counter" ? CounterStepper
    : selectedId === "tasks" ? TaskManager
    : ShoppingCart;

  return (
    <main className="hub">
      <aside className="sidebar">
        <div className="brand">React practice</div>
        <p className="sidebar-label">Playgrounds</p>
        <nav aria-label="Practice exercises">
          {exercises.map((exercise) => (
            <button className={exercise.id === selectedId ? "exercise-link active" : "exercise-link"} key={exercise.id} onClick={() => setSelectedId(exercise.id)}>
              <span>{exercise.number}</span><strong>{exercise.title}</strong><small>{exercise.skills}</small>
            </button>
          ))}
        </nav>
        <p className="sidebar-note">Edit each exercise in its own file. Your next challenge is ready when you are.</p>
      </aside>

      <section className="workbench">
        <header className="workbench-header">
          <div><p className="eyebrow">{selected.status}</p><h1>{selected.title}</h1><p>{selected.skills}</p></div>
          <code>{selected.file}</code>
        </header>
        <div className="exercise-stage"><Exercise /></div>
      </section>
    </main>
  );
}
