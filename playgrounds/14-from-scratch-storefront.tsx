"use client";

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
  return (
    <main>
      <h1>Build a storefront from scratch</h1>
      <p className="walkthrough">
        Walkthrough: I’ll start with the data types and state, then build one ProductCard,
        then map it across the product list.
      </p>

      <section className="challenge-brief" aria-label="Challenge brief">
        <strong>Start in this file</strong>
        <p>Replace this instruction screen with your own storefront. Do not look at the other cart exercise until you have a working first version.</p>
      </section>

      <ol>
        <li>Write your Product and CartItem interfaces.</li>
        <li>Create the product data and cart state.</li>
        <li>Build ProductCard and CartSummary components.</li>
        <li>Add cart updates and the derived subtotal.</li>
      </ol>
    </main>
  );
}
