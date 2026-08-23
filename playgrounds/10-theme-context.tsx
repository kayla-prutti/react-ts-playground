"use client";

import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function ThemePreview() {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("ThemePreview must be inside ThemeContext.Provider");

  return <p>Current theme: {context.theme}</p>;
}

export default function ThemeContextPractice() {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () =>
    setTheme((current) => (current === "light" ? "dark" : "light"));
  // TODO: Wrap ThemePreview in ThemeContext.Provider and pass theme + toggleTheme.
  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      <main>
        <h1>Theme context</h1>
        <p className="walkthrough">
          Walkthrough: Context shares a value with nested components without
          passing it through every level as props.
        </p>
        <button type="button" onClick={toggleTheme}>
          Toggle theme
        </button>
        <ThemePreview />
      </main>
    </ThemeContext>
  );
}
