"use client";

import { useState, type FormEvent } from "react";

// INTERVIEW SETUP: The layout and types are ready. Implement only the TODOs.
// CTO prompt: “Can you make this RSVP form validate as someone types?”
// Clarifications: name is required, email needs an @, and guests must be 1–5.
// On a valid submit, show confirmation and clear every field.

interface RsvpValues {
  name: string;
  email: string;
  guests: number;
}

type RsvpErrors = Partial<Record<keyof RsvpValues, string>>;

const emptyValues: RsvpValues = {
  name: "",
  email: "",
  guests: 1,
};

export default function PrebuiltRsvpForm() {
  const [values, setValues] = useState<RsvpValues>(emptyValues);
  const [errors, setErrors] = useState<RsvpErrors>({});
  const [wasSubmitted, setWasSubmitted] = useState(false);

  // TODO 1: Return an errors object for the current values.
  function validateForm(): RsvpErrors {
    return {};
  }

  // TODO 2: Update one field immutably, validate immediately, and hide success.
  function updateField(field: keyof RsvpValues, value: string | number) {
    // Your code here
  }

  // TODO 3: Only submit when there are no errors. Then clear fields and show success.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Your code here
  }

  // TODO 4: Derive this from validateForm instead of storing another piece of state.
  const isFormValid = false;

  return (
    <main className="rsvp-practice">
      <header className="rsvp-header">
        <p className="rsvp-kicker">North star workshop</p>
        <h1>Reserve your spot</h1>
        <p>Join a small product workshop on Thursday, October 16.</p>
      </header>

      <p className="walkthrough">
        Walk-through note: first I will decide what belongs in state and what I
        can derive from it.
      </p>

      {wasSubmitted && (
        <p className="rsvp-success" role="status">
          Thanks — your RSVP has been saved.
        </p>
      )}

      <form noValidate onSubmit={handleSubmit}>
        <div className="rsvp-field">
          <label htmlFor="rsvp-name">Your name</label>
          <input
            id="rsvp-name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Ada Lovelace"
          />
          <p className="rsvp-error">{errors.name}</p>
        </div>

        <div className="rsvp-field">
          <label htmlFor="rsvp-email">Email address</label>
          <input
            id="rsvp-email"
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="ada@example.com"
          />
          <p className="rsvp-error">{errors.email}</p>
        </div>

        <div className="rsvp-field">
          <label htmlFor="rsvp-guests">Number of guests, including you</label>
          <select
            id="rsvp-guests"
            value={values.guests}
            onChange={(event) =>
              updateField("guests", Number(event.target.value))
            }
          >
            {[1, 2, 3, 4, 5].map((guestCount) => (
              <option key={guestCount} value={guestCount}>
                {guestCount}
              </option>
            ))}
          </select>
          <p className="rsvp-error">{errors.guests}</p>
        </div>

        <button className="rsvp-submit" type="submit" disabled={!isFormValid}>
          Reserve my spot
        </button>
      </form>
    </main>
  );
}
