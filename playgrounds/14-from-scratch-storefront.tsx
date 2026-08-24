"use client";

import { resolve } from "path";
import { useState, useMemo, useEffect } from "react";

interface Products {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
}

const initCart: Products[] = [
  { id: 1, name: "Dress", category: "clothes", price: 39, quantity: 0 },
  { id: 2, name: "Pants", category: "clothes", price: 29, quantity: 0 },
  { id: 3, name: "Donut", category: "food", price: 5, quantity: 0 },
  { id: 4, name: "Coffee", category: "food", price: 7, quantity: 0 },
];

function fetchItems(): Promise<Products[]> {
  return new Promise((resolve) =>
    window.setTimeout(() => resolve(initCart), 1000)
  );
}

function ProductCard({ item }: { item: Products }) {
  return (
    <article key={item.id}>
      <div>
        <strong>{item.name}</strong>
        <div style={{ display: "flex" }}>
          <span>{item.category}</span>
          <span>${item.price}</span>
        </div>
      </div>
      <button type="button">Add Item</button>
    </article>
  );
}

function ItemCard({ item }: { item: Products }) {
  return (
    <article key={item.id}>
      <div>
        <strong>{item.name}</strong>
        <div style={{ display: "flex" }}>
          <span>{item.category}</span>
          <span>${item.price}</span>
        </div>
      </div>
      <div className="button-row">
        <button type="button">-</button>
        <button type="button">+</button>
      </div>
    </article>
  );
}

// FROM-SCRATCH CHALLENGE
// Build a small storefront with a product list and a shopping cart.
// Write every interface, useState call, helper function, and child component yourself.
//
// Requirements:
// 1. Create Product and CartItem interfaces.
// 2. Add at least four products with id, name, category, and price.
// 3. Create state for the selected category and the cart.
// 4. Build a ProductCard component that receives a product and an onAdd callback.
// 5. Build a CartSummary component that receives cart items.
// 6. Add products to the cart. If a product already exists, increase its quantity.
// 7. Add + and − buttons for each cart item. Remove an item when quantity reaches 0.
// 8. Derive the subtotal. Do not store the subtotal in state.
//
// CSS plan (optional, after the functionality works):
// - Use a two-column layout for the product list and cart on wider screens.
// - Use a one-column layout on smaller screens.
// - Give product cards a border, padding, and consistent spacing.
// - Use a single accent color for Add and quantity buttons.

export default function FromScratchStorefront() {
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [cart, setCart] = useState<Products[]>([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | Products["category"]>("all");
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsloading(true);
        const rest = await fetchItems();
        setAllProducts(rest);
      } catch {
        setError("No data fetch");
      } finally {
        setIsloading(false);
      }
    };
    fetchData();
  }, []);

  const filterItems = useMemo(() => {
    return allProducts.filter(
      (item) =>
        (item.category === category || category === "all") &&
        item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, category, allProducts]);

  return (
    <main>
      <h1>Build a storefront from scratch</h1>
      <p className="walkthrough">
        Walkthrough: I’ll start with the data types and state, then build one
        ProductCard, then map it across the product list.
      </p>

      <section className="challenge-brief" aria-label="Challenge brief">
        <strong>Start in this file</strong>
        <p>
          Replace this instruction screen with your own storefront. Do not look
          at the other cart exercise until you have a working first version.
        </p>
      </section>

      <ol>
        <li>Write your Product and CartItem interfaces.</li>
        <li>Create the product data and cart state.</li>
        <li>Build ProductCard and CartSummary components.</li>
        <li>Add cart updates and the derived subtotal.</li>
      </ol>
      <label>Search name of item</label>
      <input
        aria-label="Seach item"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Searh"
      />
      <label>Select category</label>
      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value as "all" | Products["category"])
        }
      >
        <option value="all">All</option>
        <option value="clothes">Clothes</option>
        <option value="food">Food</option>
      </select>
      <section aria-label="Cart Items">
        <strong>All Products</strong>
        {isLoading && <p role="status">Loading tickets…</p>}
        {error && <p role="alert">{error}</p>}
        {!isLoading && !error && filterItems.length > 0 ? (
          filterItems.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <p>No item found</p>
        )}
      </section>
    </main>
  );
}
