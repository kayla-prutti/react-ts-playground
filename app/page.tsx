"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  category: "Home" | "Outdoors" | "Office";
  price: number;
};

const products: Product[] = [
  { id: 1, name: "Ceramic mug", category: "Home", price: 24 },
  { id: 2, name: "Trail bottle", category: "Outdoors", price: 32 },
  { id: 3, name: "Desk lamp", category: "Office", price: 48 },
  { id: 4, name: "Field notebook", category: "Office", price: 12 },
];

export default function Home() {
  const [query, setQuery] = useState("");

  const filtedProducts = products.filter((product) => {
    const searchValue = query.toLowerCase();

    return (
      product.name.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue)
    );
  });

  return (
    <main>
      <header>
        <p>React interview mock</p>
        <h1>Filterable product list</h1>
        <p className="brief">
          Build a product catalog where someone can search, filter by category,
          and save favorites. Start with the search box below.
        </p>
      </header>

      <label htmlFor="search">Search products</label>
      <input
        id="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Try “mug”"
      />

      <section aria-label="Products">
        {filtedProducts.map((product) => (
          <article key={product.id}>
            <div>
              <strong>{product.name}</strong>
              <span>{product.category}</span>
            </div>
            <b>${product.price}</b>
          </article>
        ))}
      </section>
    </main>
  );
}
