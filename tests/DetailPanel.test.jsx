import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import DetailPanel from '../src/components/DetailPanel.jsx';

vi.mock('../src/lib/api.js', () => ({
  getTicket: () =>
    Promise.resolve({
      id: 1,
      subject: 'Login button does nothing on Safari',
      reporter_email: 'jane@example.com',
      priority: 'high',
      status: 'in_progress',
    }),
  getStatusHistory: () =>
    Promise.resolve([{ from_status: 'new', to_status: 'triaged', created_at: '2026-01-01' }]),
}));

describe('DetailPanel', () => {
  it('renders the ticket subject once loaded', async () => {
    render(<DetailPanel ticketId={1} onClose={() => {}} />);
    await waitFor(() => {
      expect(screen.getByText('Login button does nothing on Safari')).toBeTruthy();
    });
  });
});
