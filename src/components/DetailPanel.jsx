import React from 'react';
import { useTicket } from '../lib/useTicket.js';
import { formatRelative } from '../lib/dateFormat.js';

const overlayStyle = {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '420px',
  background: 'white',
  boxShadow: '-2px 0 8px rgba(0,0,0,0.15)',
  padding: '1.5rem',
  overflowY: 'auto',
  zIndex: 1000,
};

export default function DetailPanel({ ticketId, onClose }) {
  const { ticket, history } = useTicket(ticketId);

  if (!ticket) {
    return null;
  }

  return (
    <div style={overlayStyle}>
      <button onClick={onClose} style={{ float: 'right' }}>×</button>
      <h2 dangerouslySetInnerHTML={{ __html: ticket.subject }} />
      <p>{ticket.reporter_email} — {ticket.priority}</p>
      <p>Current status: <strong>{ticket.status}</strong></p>

      <h3>Status history</h3>
      <ul>
        {history.map((h) => (
          <li>
            {h.from_status || '(new)'} → {h.to_status}
            <span style={{ color: '#888', marginLeft: '0.5rem' }}>
              {formatRelative(h.created_at)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
