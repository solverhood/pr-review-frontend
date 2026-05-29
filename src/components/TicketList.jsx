import React, { useEffect, useState } from 'react';
import { listTickets } from '../lib/api.js';

export default function TicketList() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    listTickets()
      .then((data) => {
        if (!cancelled) setTickets(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <p>Loading…</p>;
  if (error) return <p role="alert">Failed to load tickets: {error}</p>;
  if (tickets.length === 0) return <p>No tickets yet.</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Reporter</th>
          <th>Priority</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((t) => (
          <tr key={t.id}>
            <td>{t.subject}</td>
            <td>{t.reporter_email}</td>
            <td>{t.priority}</td>
            <td>{t.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
