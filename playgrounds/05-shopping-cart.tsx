"use client";

import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const initialCart: CartItem[] = [
  { id: 1, name: "Ceramic mug", price: 24, quantity: 1 },
  { id: 2, name: "Desk lamp", price: 48, quantity: 1 },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  // TODO: Add + and − quantity handlers.
  // TODO: Remove an item when its quantity reaches 0.
  // TODO: Derive a subtotal from cart instead of storing it in state.

  return (
    <main>
      <h1>Shopping cart</h1>
      <p className="walkthrough">
        Walkthrough: The cart array is state; subtotal is derived from the items in it.
      </p>
      <section aria-label="Cart items">
        {cart.map((item) => (
          <article key={item.id}>
            <div><strong>{item.name}</strong><span>${item.price}</span></div>
            <div className="button-row"><button type="button">−</button><span>{item.quantity}</span><button type="button">+</button></div>
          </article>
        ))}
      </section>
    </main>
  );
}
