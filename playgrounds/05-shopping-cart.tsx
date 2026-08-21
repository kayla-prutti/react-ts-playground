"use client";

import { act, useState } from "react";

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
  function handleQuantity(action: string, id: number) {
    console.log({ action, id });
    if (action === "increase") {
      setCart(
        cart.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else if (action === "decrease") {
      setCart(
        cart
          .map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          )
          .filter((item) => item.quantity > 0)
      );
    }
  }

  function totalSum() {
    return cart.reduce((total, obj) => total + obj.price, 0);
  }

  console.log("cart", cart);
  return (
    <main>
      <h1>Shopping cart</h1>
      <p className="walkthrough">
        Walkthrough: The cart array is state; subtotal is derived from the items
        in it.
      </p>
      <section aria-label="Cart items">
        {cart.map((item) => (
          <article key={item.id}>
            <div>
              <strong>{item.name}</strong>
              <span>${item.price}</span>
            </div>
            <div className="button-row">
              <button
                type="button"
                onClick={() => handleQuantity("decrease", item.id)}
              >
                −
              </button>
              <span>{item.quantity}</span>
              <button
                type="button"
                onClick={() => handleQuantity("increase", item.id)}
              >
                +
              </button>
            </div>
          </article>
        ))}
        <p>Total: ${totalSum()}</p>
      </section>
    </main>
  );
}
