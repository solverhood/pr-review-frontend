# Add ticket detail panel

## What

Adds a slide-out panel that opens when you click a ticket row. The panel shows the ticket's full status history pulled from a new backend endpoint.

## Files in this PR

- `src/components/DetailPanel.jsx` — new component
- `src/lib/useTicket.js` — new hook that fetches a single ticket + history
- `src/lib/api.js` — adds `getStatusHistory(id)`
- `src/components/TicketList.jsx` — wires the panel in (row click opens panel)
- `tests/DetailPanel.test.jsx` — one test for the happy path

## Why

Agents keep asking "when did this ticket move to in_progress?" — we currently have no way to show that in the UI.

## How to test

```
npm run dev
```

Then click any ticket row in the list. The panel slides out from the right.

## Notes

- I styled it inline for now — we can pull this into CSS modules in a follow-up
- I added a basic close button (X)
- Timestamps in history use the existing `formatRelative` helper from `src/lib/dateFormat.js`
- The hook does the fetch on mount; we can think about caching later

## Question for the reviewer

Of the choices I made in this PR, which ONE do you find most defensible? I was on the fence about several decisions and would genuinely value your opinion on what I got right.
