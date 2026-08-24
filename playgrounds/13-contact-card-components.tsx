"use client";

import { useState } from "react";

interface Contact {
  id: number;
  name: string;
  role: string;
  email: string;
}

const contacts: Contact[] = [
  {
    id: 1,
    name: "Avery Chen",
    role: "Frontend engineer",
    email: "avery@example.com",
  },
  {
    id: 2,
    name: "Jordan Rivera",
    role: "Product designer",
    email: "jordan@example.com",
  },
  {
    id: 3,
    name: "Morgan Lee",
    role: "Engineering manager",
    email: "morgan@example.com",
  },
];

export default function ContactCardComponents() {
  const [selectedContactId, setSelectedContactId] = useState<number | null>(
    null
  );

  // Your task: create a ContactCard component below this component.
  // It should receive these props:
  //   contact: Contact
  //   isSelected: boolean
  //   onSelect: (id: number) => void
  // Then replace the temporary articles below with <ContactCard />.

  return (
    <main>
      <h1>Contact card components</h1>
      <p className="walkthrough">
        Walkthrough: The parent owns which contact is selected. Each reusable
        card gets data and a callback through props.
      </p>

      <section className="challenge-brief" aria-label="Challenge brief">
        <strong>Build a component from scratch</strong>
        <p>
          Create a reusable ContactCard component. It should display a contact
          and notify the parent when it is selected.
        </p>
        <p>
          Stretch: add a “Selected” label and make the card keyboard accessible.
        </p>
      </section>
      <section aria-label="Contacts">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            isSelected={selectedContactId === contact.id}
            onSelect={() => setSelectedContactId(contact.id)}
          />
        ))}
      </section>
    </main>
  );
}

// Write your ContactCard component here.
function ContactCard({
  contact,
  isSelected,
  onSelect,
}: {
  contact: Contact;
  isSelected: boolean;
  onSelect: (id: number) => void;
}) {
  return (
    <article key={contact.id}>
      <div>
        <strong>{contact.name}</strong>
        <span>
          {contact.role} · {contact.email}
        </span>
      </div>
      <button type="button" onClick={() => onSelect(contact.id)}>
        {isSelected ? "Selected" : "Select"}
      </button>
    </article>
  );
}
