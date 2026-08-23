"use client";

import { useState } from "react";
import FilterableProductList from "../playgrounds/01-filterable-product-list";
import UserProfileLoader from "../playgrounds/02-user-profile-loader";
import CounterStepper from "../playgrounds/03-counter-stepper";
import TaskManager from "../playgrounds/04-task-manager";
import ShoppingCart from "../playgrounds/05-shopping-cart";
import ProductInsights from "../playgrounds/06-product-insights";
import FocusForm from "../playgrounds/07-focus-form";
import ReducerTaskBoard from "../playgrounds/08-reducer-task-board";
import LocalDraft from "../playgrounds/09-local-draft";
import ThemeContextPractice from "../playgrounds/10-theme-context";
import SignupForm from "../playgrounds/11-signup-form";

const exercises = [
  { id: "products", number: "01", title: "Filterable product list", skills: "useState · derived data · lists", file: "playgrounds/01-filterable-product-list.tsx", status: "Complete" },
  { id: "profile", number: "02", title: "User profile loader", skills: "interface · useState · useEffect", file: "playgrounds/02-user-profile-loader.tsx", status: "Next up" },
  { id: "counter", number: "03", title: "Counter stepper", skills: "useState · events · numbers", file: "playgrounds/03-counter-stepper.tsx", status: "Build from scratch" },
  { id: "tasks", number: "04", title: "Task manager", skills: "interface · forms · arrays", file: "playgrounds/04-task-manager.tsx", status: "Build from scratch" },
  { id: "cart", number: "05", title: "Shopping cart", skills: "interface · state updates · reduce", file: "playgrounds/05-shopping-cart.tsx", status: "Build from scratch" },
  { id: "memo", number: "06", title: "Product insights", skills: "useMemo · filters · derived data", file: "playgrounds/06-product-insights.tsx", status: "Build from scratch" },
  { id: "ref", number: "07", title: "Focus form", skills: "useRef · DOM focus", file: "playgrounds/07-focus-form.tsx", status: "Build from scratch" },
  { id: "reducer", number: "08", title: "Reducer task board", skills: "useReducer · actions · state", file: "playgrounds/08-reducer-task-board.tsx", status: "Build from scratch" },
  { id: "storage", number: "09", title: "Saved draft", skills: "custom hook · useEffect", file: "playgrounds/09-local-draft.tsx", status: "Build from scratch" },
  { id: "context", number: "10", title: "Theme context", skills: "useContext · shared state", file: "playgrounds/10-theme-context.tsx", status: "Build from scratch" },
  { id: "form", number: "11", title: "Signup form", skills: "controlled inputs · validation · submit", file: "playgrounds/11-signup-form.tsx", status: "Interview essential" },
];

export default function Home() {
  const [selectedId, setSelectedId] = useState("products");
  const selected = exercises.find((exercise) => exercise.id === selectedId)!;
  const Exercise = selectedId === "products" ? FilterableProductList
    : selectedId === "profile" ? UserProfileLoader
    : selectedId === "counter" ? CounterStepper
    : selectedId === "tasks" ? TaskManager
    : selectedId === "cart" ? ShoppingCart
    : selectedId === "memo" ? ProductInsights
    : selectedId === "ref" ? FocusForm
    : selectedId === "reducer" ? ReducerTaskBoard
    : selectedId === "storage" ? LocalDraft
    : selectedId === "context" ? ThemeContextPractice
    : SignupForm;

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
