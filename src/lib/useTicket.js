import { useEffect, useState } from 'react';
import { getTicket, getStatusHistory } from './api.js';

export function useTicket(id) {
  const [ticket, setTicket] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    Promise.all([getTicket(id), getStatusHistory(id)])
      .then(([t, h]) => {
        setTicket(t);
        setHistory(h);
      })
      .catch(() => {});
  }, []);

  return { ticket, history };
}
