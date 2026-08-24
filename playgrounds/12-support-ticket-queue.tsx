"use client";

import { useEffect, useState } from "react";

type TicketStatus = "open" | "in progress" | "resolved";
type TicketPriority = "low" | "medium" | "high";

interface Ticket {
  id: number;
  customer: string;
  subject: string;
  priority: TicketPriority;
  status: TicketStatus;
}

const ticketData: Ticket[] = [
  {
    id: 101,
    customer: "Riley Park",
    subject: "Invoice has the wrong amount",
    priority: "high",
    status: "open",
  },
  {
    id: 102,
    customer: "Casey Morgan",
    subject: "Cannot update workspace name",
    priority: "medium",
    status: "in progress",
  },
  {
    id: 103,
    customer: "Emery Blake",
    subject: "Need a copy of last month’s receipt",
    priority: "low",
    status: "resolved",
  },
  {
    id: 104,
    customer: "Samira Patel",
    subject: "Invite email did not arrive",
    priority: "high",
    status: "open",
  },
];

function fetchTickets(): Promise<Ticket[]> {
  return new Promise((resolve) =>
    window.setTimeout(() => resolve(ticketData), 600)
  );
}

export default function SupportTicketQueue() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | TicketStatus>("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // TODO (5-10 min): Load tickets with fetchTickets().
    // Set loading before the request, then handle success and error states.
  }, []);

  const visibleTickets = tickets;
  // TODO (10-15 min): Filter tickets by query and statusFilter.
  // Search should match a customer or a subject.

  function updateTicketStatus(id: number, status: TicketStatus) {
    // TODO (5-10 min): Update only the matching ticket, without mutating state.
  }

  return (
    <main>
      <h1>Support ticket queue</h1>
      <p className="walkthrough">
        Walkthrough: I’ll ship loading and list rendering first, then filters,
        then an immutable status update. I’ll keep visible tickets as derived
        data.
      </p>
      <section className="challenge-brief" aria-label="Interview brief">
        <strong>45-minute interview challenge</strong>
        <p>
          Build a queue that loads tickets, searches, filters by status, and
          lets an agent update a ticket’s status.
        </p>
        <p>
          Stretch: display the count of open tickets and handle an empty result.
        </p>
      </section>
      <div className="ticket-controls">
        <label htmlFor="ticket-search">Search tickets</label>
        <input
          id="ticket-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search customer or subject"
        />
        <label htmlFor="ticket-status">Status</label>
        <select
          id="ticket-status"
          value={statusFilter}
          onChange={(event) =>
            setStatusFilter(event.target.value as "all" | TicketStatus)
          }
        >
          <option value="all">All statuses</option>
          <option value="open">Open</option>
          <option value="in progress">In progress</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>
      {isLoading && <p role="status">Loading tickets…</p>}
      {error && <p role="alert">{error}</p>}
      {!isLoading && !error && (
        <section aria-label="Support tickets">
          {visibleTickets.map((ticket) => (
            <article key={ticket.id}>
              <div>
                <strong>{ticket.subject}</strong>
                <span>
                  {ticket.customer} · {ticket.priority} priority
                </span>
              </div>
              <select
                aria-label={`Status for ${ticket.subject}`}
                value={ticket.status}
                onChange={(event) =>
                  updateTicketStatus(
                    ticket.id,
                    event.target.value as TicketStatus
                  )
                }
              >
                <option value="open">Open</option>
                <option value="in progress">In progress</option>
                <option value="resolved">Resolved</option>
              </select>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
