# CodeAtRandom – Assignment Project

This is my submission for the CodeAtRandom internship task.
The project analyzes a user’s skills, compares them with a chosen role, generates a roadmap, and shows recent tech news.

## Features

Enter a target role + current skills

Skill gap analysis (matched + missing skills)

Career roadmap based on the selected role

Latest tech stories (HackerNews API)

Data persisted using localStorage

Optional: anonymous logging using Prisma + Neon/PostgreSQL

Fully deployed on Vercel
## Tech Stack

Next.js (App Router)

TypeScript

TailwindCSS

Axios

Prisma + PostgreSQL (optional)

##  Project Structure\
```bash
src/
└── app/
    ├── api/
    │   ├── skill-gap/
    │   │   └── route.ts
    │   ├── roadmap/
    │   │   └── route.ts
    │   └── hackernews/
    │       └── route.ts
    ├── components/
    │   ├── SkillGapResults.tsx
    │   ├── CareerRoadmap.tsx
    │   └── TechNews.tsx
    ├── dashboard/
    │   └── page.tsx
    └── page.tsx

prisma/
└── schema.prisma

```

## Running the Project (Local)

```bash
npm install
```

If using the database version:

```bash
npx prisma generate
```

Start the app:

```bash
npm run dev
```

Then open:

http://localhost:3000

## API Endpoints
1) POST /api/skill-gap

Input:

{
  "targetRole": "Frontend Developer",
  "currentSkills": ["HTML", "CSS"]
}

2) POST /api/roadmap

Input:

{ "targetRole": "Frontend Developer" }

3) GET /api/hackernews

Returns top 5 tech news posts.