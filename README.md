# The Three Doorways

A personalised family puzzle adventure for Jen, Clara and Atticus. Each hero enters a different themed world and opens five doors by solving age-appropriate puzzles.

## Features

- One shared character-selection screen
- Three independent five-door adventures
- Hints, sequential unlocking and completion celebrations
- Device-local progress saving
- Responsive controls for phones, tablets and desktop browsers
- Jen's final surprise link after completing all five puzzles

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

## Publish at `zenhuang.com/5doors`

A domain record attaches to a hostname, not a URL path. Configure the existing `zenhuang.com` project or hosting layer to rewrite `/5doors` to the Vercel deployment. A subdomain such as `5doors.zenhuang.com` can instead be attached directly in Vercel.

