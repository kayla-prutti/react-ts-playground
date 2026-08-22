"use client";
import { useMemo, useState } from "react";
interface Product {
  id: number;
  name: string;
  category: "Home" | "Office" | "Outdoors";
  price: number;
}
const products: Product[] = [
  { id: 1, name: "Ceramic mug", category: "Home", price: 24 },
  { id: 2, name: "Pot", category: "Home", price: 24 },
  { id: 3, name: "Pan", category: "Home", price: 24 },
  { id: 4, name: "Desk lamp", category: "Office", price: 48 },
  { id: 5, name: "Chair", category: "Office", price: 48 },
  { id: 6, name: "Trail bottle", category: "Outdoors", price: 32 },
];
export default function ProductInsights() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | Product["category"]>("All");
  const visibleProducts = useMemo(() => {
    /* TODO: Return products that match query and category. */
    return products.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        p.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, category]);

  return (
    <main>
      <h1>Product insights</h1>
      <p className="walkthrough">
        Walkthrough: I will use useMemo only for the filtered result, which is
        derived from the chosen filters.
      </p>
      <input
        aria-label="Search products"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search"
      />
      <select
        value={category}
        onChange={(event) =>
          setCategory(event.target.value as "All" | Product["category"])
        }
      >
        <option>All</option>
        <option>Home</option>
        <option>Office</option>
        <option>Outdoors</option>
      </select>
      <p>{visibleProducts.length} products</p>
      {visibleProducts.map((p) => (
        <p key={p.id}>{p.name}</p>
      ))}
    </main>
  );
}
