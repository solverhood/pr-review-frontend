# Frontend Code Review — Take-Home Task

Welcome. This repo is a take-home task for frontend engineering candidates at **Solverhood / Analyzify**.

You are NOT being asked to build anything. You are being asked to review a pull request.

---

## What to do

1. Read the open pull request: **[#1 — Add ticket detail panel](https://github.com/solverhood/pr-review-frontend/pull/1)**
2. Read the PR description on that page
3. Read the diff (the "Files changed" tab)
4. Write a code review

You can clone the repo if you want to run it, but you do not have to.

---

## What to send back

Reply to the email we sent you with all three of these:

### 1. A `REVIEW.md` file

Paste inline in your email, attach, or link to a gist — your choice.

Your review must include:

- **A list of issues you found.** For each issue:
  - Severity: `blocker` / `high` / `medium` / `low` / `nit`
  - File and line reference
  - One-sentence description of the problem
  - Concrete suggested fix
- **Your top 3 concerns** at the top — the ones you would block merge on.
- **Final verdict**, one of:
  - Approve as-is
  - Request changes (list which issues must be resolved before approval)
  - Reject (with reasoning)
- **Anything you would ASK the author** before approving — questions the diff alone doesn't answer.

Bullet points. Concise.

### 2. A short screen-recording video (5 minutes max)

Use whatever tool you like — Loom, Vimeo, YouTube (unlisted), QuickTime + Google Drive, OBS + Dropbox, anything that gives us a playable link.

Open the PR diff on screen and walk us through:

- Your top 3 concerns
- One issue where you weren't sure if you were right
- One thing about the PR you would have done differently as the author

No script. No slides. Voice only is fine — camera not required.

### 3. Honest estimate of total time you spent

A simple number is enough.

---

## Time budget

**60 to 90 minutes.** Stop at 90 and submit what you have.

---

## A note on AI

We are asking you to review code, not write it. We want to see how you think.

For this task, please do not use ChatGPT, Claude, Copilot, Cursor, or other AI assistants. Search engines, language documentation, and your editor's normal features are fine.

This is on the honor system — we won't be checking. We trust you to give it a go on your own.

---

## About the codebase

A small React + Vite admin UI for a support tickets queue. It talks to a separate backend at `http://localhost:3000`.

Existing components (already on `main`, not under review):

- `src/App.jsx` — entry, mounts `<TicketList />`
- `src/components/TicketList.jsx` — table of all tickets
- `src/lib/api.js` — tiny fetch wrapper

To run locally (optional):

```
npm install
npm run dev
```

UI runs at `http://localhost:5173`.

---

If you have any questions about the process, reply to the original email and ask.
