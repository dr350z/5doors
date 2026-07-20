# The Three Doorways

A personalised family puzzle adventure for Jen, Clara and Atticus. Each hero enters a different themed world and opens five doors by solving age-appropriate puzzles.

## Features

- One shared three-hero adventure
- Atticus completes five doors first, followed by Clara and then Jen
- Hints, sequential door unlocking and completion celebrations
- Device-local progress saving
- Responsive controls for phones, tablets and desktop browsers
- The final `surprise.zenhuang.com` reward after all 15 doors are complete

## Run locally

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

Import this repository into Vercel and keep the detected framework as **Next.js**. The standard build command is:

```bash
npm run build
```

No environment variables are required.

## Publish at `5doors.zenhuang.com`

Attach `5doors.zenhuang.com` directly to this project in Vercel under **Settings → Domains**. No base path or rewrite is required.

