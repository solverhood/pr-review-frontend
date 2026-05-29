import React from 'react';
import TicketList from './components/TicketList.jsx';

export default function App() {
  return (
    <main style={{ fontFamily: 'system-ui', padding: '2rem' }}>
      <h1>Support Tickets</h1>
      <TicketList />
    </main>
  );
}
