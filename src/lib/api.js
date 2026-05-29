const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000';

export async function listTickets() {
  const res = await fetch(`${BASE}/tickets`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function getTicket(id) {
  const res = await fetch(`${BASE}/tickets/${id}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function getStatusHistory(id) {
  const res = await fetch(`${BASE}/tickets/${id}/transitions`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
