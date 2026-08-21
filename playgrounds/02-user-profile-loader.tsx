"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: "Designer" | "Engineer" | "Product";
}

const users: User[] = [
  { id: 1, name: "Avery Chen", email: "avery@example.com", role: "Engineer" },
  {
    id: 2,
    name: "Jordan Rivera",
    email: "jordan@example.com",
    role: "Designer",
  },
  { id: 3, name: "Morgan Lee", email: "morgan@example.com", role: "Product" },
];

function fetchUser(id: number): Promise<User> {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      const user = users.find((item) => item.id === id);
      if (user) resolve(user);
      else reject(new Error("User not found"));
    }, 700);
  });
}

export default function UserProfileLoader() {
  const [selectedUserId, setSelectedUserId] = useState(1);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // TODO:
    // 1. Set loading to true and clear the previous error.
    // 2. Call fetchUser(selectedUserId).
    // 3. Store the returned user, or store an error message.
    // 4. Set loading to false when the request is complete.
    setIsLoading(true);
    setError("");
    fetchUser(selectedUserId)
      .then((selectUser) => {
        setUser(selectUser);
      })
      .catch((error: Error) => {
        setError(error.message);
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [selectedUserId]);

  return (
    <main>
      <h1>User profile</h1>
      <p className="walkthrough">
        Walkthrough: I will use an interface for the user data and useEffect to
        load a selected profile.
      </p>

      <label htmlFor="user">Choose a user</label>
      <select
        id="user"
        value={selectedUserId}
        onChange={(event) => setSelectedUserId(Number(event.target.value))}
      >
        {users.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>

      {/* TODO: Render loading, error, and user states. */}
      {isLoading && <p>Loading…</p>}
      {error && <p role="alert">{error}</p>}
      {!isLoading && user && (
        <article>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </article>
      )}
    </main>
  );
}
