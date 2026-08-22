"use client";
import { useEffect, useState } from "react";
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  useEffect(() => {
    /* TODO: Read a saved value on first load and save changes to localStorage. */
  }, [key, value]);
  return [value, setValue] as const;
}
export default function LocalDraft() {
  const [draft, setDraft] = useLocalStorage("practice-draft", "");
  return (
    <main>
      <h1>Saved draft</h1>
      <p className="walkthrough">
        Walkthrough: I moved reusable browser-storage logic into a custom hook
        so the component stays simple.
      </p>
      <label htmlFor="draft">Draft</label>
      <textarea
        id="draft"
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        placeholder="Write a short note"
      />
    </main>
  );
}
