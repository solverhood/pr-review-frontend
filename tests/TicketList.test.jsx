import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import TicketList from '../src/components/TicketList.jsx';

vi.mock('../src/lib/api.js', () => ({
  listTickets: () =>
    Promise.resolve([
      {
        id: 1,
        subject: 'Login button does nothing on Safari',
        reporter_email: 'jane@example.com',
        priority: 'high',
        status: 'in_progress',
      },
    ]),
}));

describe('TicketList', () => {
  it('renders a ticket subject', async () => {
    render(<TicketList />);
    await waitFor(() => {
      expect(screen.getByText('Login button does nothing on Safari')).toBeTruthy();
    });
  });
});
