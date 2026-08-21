"use client";

import { useState } from "react";
import FilterableProductList from "../playgrounds/01-filterable-product-list";
import UserProfileLoader from "../playgrounds/02-user-profile-loader";

const exercises = [
  { id: "products", number: "01", title: "Filterable product list", skills: "useState · derived data · lists", file: "playgrounds/01-filterable-product-list.tsx", status: "Complete" },
  { id: "profile", number: "02", title: "User profile loader", skills: "interface · useState · useEffect", file: "playgrounds/02-user-profile-loader.tsx", status: "Next up" },
];

export default function Home() {
  const [selectedId, setSelectedId] = useState("products");
  const selected = exercises.find((exercise) => exercise.id === selectedId)!;
  const Exercise = selectedId === "products" ? FilterableProductList : UserProfileLoader;

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
