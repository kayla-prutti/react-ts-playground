"use client";

import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: "Home" | "Outdoors" | "Office";
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Ceramic mug", category: "Home", price: 24 },
  { id: 2, name: "Trail bottle", category: "Outdoors", price: 32 },
  { id: 3, name: "Desk lamp", category: "Office", price: 48 },
  { id: 4, name: "Field notebook", category: "Office", price: 12 },
];

export default function FilterableProductList() {
  const [query, setQuery] = useState("");
  const filteredProducts = products.filter((product) => {
    const searchValue = query.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue)
    );
  });

  return (
    <main>
      <p className="walkthrough">
        Walkthrough: I will keep the query in state, use query to filter the product. Render filterProducts
      </p>
      <label htmlFor="search">Search products</label>
      <input
        id="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <section aria-label="Products">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <article key={product.id}>
              <div>
                <strong>{product.name}</strong>
                <span>{product.category}</span>
              </div>
              <b>${product.price}</b>
            </article>
          ))
        )}
      </section>
    </main>
  );
}
