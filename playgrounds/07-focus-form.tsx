"use client";
import { useRef, useState } from "react";
export default function FocusForm() {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  function focusMessage() { /* TODO: Focus the input with inputRef.current. */ }
  return <main><h1>Focus form</h1><p className="walkthrough">Walkthrough: I use a ref to access one input element without putting that element in state.</p><label htmlFor="message">Message</label><input ref={inputRef} id="message" value={message} onChange={(event) => setMessage(event.target.value)} /><div className="button-row"><button type="button" onClick={focusMessage}>Focus message</button><button type="button" onClick={() => setMessage("")}>Clear</button></div></main>;
}
