"use client";
import { useState } from "react";

// INTERVIEW SETUP: The UI, data, and types are already provided.
// Your job is to implement only the TODOs while talking through your plan.
// CTO prompt: “This screen is designed. Can you make search and cart interactions work?”
// Ask: Is search case-insensitive? Yes. What happens when an item is added twice? Increase quantity. What does minus do at one? Remove it.

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}
interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  { id: 1, name: "Canvas tote", category: "Accessories", price: 28 },
  { id: 2, name: "Stoneware mug", category: "Home", price: 22 },
  { id: 3, name: "Wool cap", category: "Accessories", price: 34 },
  { id: 4, name: "Desk organizer", category: "Office", price: 46 },
];

export default function PrebuiltProductCartInterview() {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  // TODO 1: replace products with a case-insensitive search result.
  const visibleProducts = products.filter((product) =>
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  function addToCart(product: Product) {
    /* TODO 2: add a CartItem or increase its quantity. */
    setCart((prev) => {
      const existing = prev.find((prev) => prev.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...product, quantity: p.quantity + 1 } : p
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }
  function updateQuantity(id: number, change: number) {
    /* TODO 3: update immutably and remove at zero. */
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, quantity: p.quantity + change } : p))
        .filter((p) => p.quantity > 0)
    );
  }
  // TODO 4: derive total from cart with reduce.
  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="interview-cart">
      <header className="store-header">
        <div>
          <p className="store-kicker">Field goods</p>
          <h1>Shop the collection</h1>
        </div>
        <p>{cart.length} items in cart</p>
      </header>
      <div className="store-layout">
        <section className="catalog" aria-label="Products">
          <label htmlFor="product-search">Search products</label>
          <input
            id="product-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name or category"
          />
          <div className="product-grid">
            {visibleProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <p>{product.category}</p>
                <h2>{product.name}</h2>
                <strong>${product.price.toFixed(2)}</strong>
                <button type="button" onClick={() => addToCart(product)}>
                  Add to cart
                </button>
              </article>
            ))}
          </div>
          {/* TODO: Render an empty state if visibleProducts is empty. */}
        </section>
        <aside className="cart-panel" aria-label="Shopping cart">
          <h2>Your cart</h2>
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-row" key={item.id}>
                <div>
                  <strong>{item.name}</strong>
                  <span>${item.price.toFixed(2)}</span>
                </div>
                <div className="quantity-controls">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}
          <div className="cart-total">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </aside>
      </div>
    </main>
  );
}
