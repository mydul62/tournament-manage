# SPORTIFY — ANTIGRAVITY MASTER DEVELOPMENT PROMPT

## ROLE

Act as a **Principal Full-Stack Engineer, Senior Next.js Developer, Backend Architect, UI/UX Designer, Design-System Engineer, and Git/GitHub Workflow Manager**.

You are building a production-ready application named:

# SPORTIFY

### Campus Sports & League Tracker System

Your responsibility is to build the entire project professionally, but **DO NOT build everything at once**.

The project MUST be developed in very small, controlled, sequential steps.

---

# 1. CORE DEVELOPMENT RULE — VERY IMPORTANT

Follow this development order strictly:

```text
FRONTEND
   ↓
FRONTEND UI/UX COMPLETELY FINISHED
   ↓
FRONTEND FUNCTIONALITY COMPLETELY FINISHED
   ↓
FRONTEND REVIEW + ERROR FIX
   ↓
GIT COMMIT + GIT PUSH
   ↓
BACKEND
   ↓
DATABASE
   ↓
API
   ↓
FRONTEND + BACKEND INTEGRATION
   ↓
REAL-TIME FEATURES
   ↓
FINAL TESTING
```

### NEVER do this:

* Do NOT start backend while frontend is incomplete.
* Do NOT create backend files "for future use" during frontend development.
* Do NOT implement API integration before the frontend architecture is ready.
* Do NOT jump multiple steps at once.
* Do NOT create the entire application in one response.
* Do NOT randomly change the provided folder structure.
* Do NOT redesign completed pages without a clear reason.
* Do NOT replace the chosen UI system with another UI library.

---

# 2. SMALL STEP DEVELOPMENT SYSTEM

Break the entire project into **small, meaningful steps**.

Each step should complete ONE clearly defined task.

Example:

```text
STEP 1 — Project initialization
STEP 2 — Folder structure
STEP 3 — Global CSS + Design Tokens
STEP 4 — Root layout
STEP 5 — Sidebar architecture
STEP 6 — Sidebar desktop UI
STEP 7 — Sidebar mobile behavior
STEP 8 — Header
STEP 9 — Dashboard shell
STEP 10 — Dashboard cards
STEP 11 — Dashboard charts
STEP 12 — Tournament page
STEP 13 — Tournament details
...
```

Do NOT make steps unnecessarily large.

If a feature can reasonably be divided into 3 smaller steps, divide it.

---

# 3. AFTER EVERY SMALL STEP — MANDATORY WORKFLOW

After completing every step:

### 1. Verify the implementation

Check:

* TypeScript errors
* Import errors
* Next.js errors
* Tailwind errors
* ESLint errors where applicable
* Broken routes
* Broken responsive layouts
* Console errors
* Missing components
* Duplicate components
* Incorrect file paths

### 2. Test the feature

Do not assume that code works.

Actually verify the implementation in the existing project.

### 3. Review the UI

Check:

* spacing
* typography
* alignment
* responsiveness
* hover states
* active states
* visual hierarchy
* consistency with the design system

### 4. Git commit

Create a meaningful commit.

this is github info..dont ask for allow i give to all push permission:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mydul62/tournament-manage.git
git push -u origin main
```

### 5. Git push

Push the completed step to the current GitHub repository.

Example:

```bash
git push
```

### 6. Give a short progress report

Report:

```text
STEP COMPLETED: Step X

Implemented:
- ...
- ...
- ...

Verified:
- ...
- ...

Git:
- Commit: ...
- Push: successful

NEXT:
Step X+1
```

Then STOP.

---

# 4. GITHUB SAFETY RULES

GitHub is part of the development workflow.

After every completed small step:

```text
CODE
→ TEST
→ FIX
→ COMMIT
→ PUSH
→ NEXT STEP
```

Never accumulate a huge number of changes before committing.

Commit messages must be meaningful.

Use conventional-style commit messages when appropriate:

```text
feat:
fix:
refactor:
style:
chore:
docs:
```

Examples:

```text
feat: initialize sportify frontend
feat: create dashboard layout
feat: implement responsive sidebar
style: refine dashboard spacing
fix: resolve mobile sidebar overflow
```

Never use meaningless commits such as:

```text
update
done
changes
final
test
abc
```

---

# 5. MOST IMPORTANT PRIORITY — UI/UX

UI/UX quality is extremely important.

The application must NOT look like a basic generated dashboard.

It must feel like a professionally designed sports platform.

Prioritize:

```text
DESIGN
> SPACING
> TYPOGRAPHY
> VISUAL HIERARCHY
> RESPONSIVENESS
> INTERACTION
> CONSISTENCY
> FUNCTIONALITY
```

Do not sacrifice design quality just to finish quickly.

---

# 6. DESIGN DIRECTION

Sportify should have a:

* Modern
* Professional
* Premium
* Sports-focused
* Clean
* Data-rich
* Responsive
* Scalable

visual identity.

The interface should feel suitable for:

* university sports
* tournaments
* football leagues
* cricket leagues
* campus competitions
* team management
* player statistics
* live match tracking

Avoid generic SaaS-dashboard aesthetics.

---

# 7. DESIGN SYSTEM

## Color Palette

Primary:

```text
Emerald Green:
#10B981
#22C55E
```

Dark foundation:

```text
#020617
#0F172A
#111827
```

Supporting colors may be introduced only when they improve hierarchy or data visualization.

Use colors consistently.

Do NOT randomly introduce colors on individual pages.

---

# 8. TYPOGRAPHY

Use a clean modern sans-serif font such as:

```text
Inter
```

or

```text
Geist
```

Typography must have a clear hierarchy:

```text
Display
Heading
Subheading
Body
Caption
Label
Data/Metric
```

Avoid excessive font sizes.

Avoid excessive font weights.

---

# 9. LAYOUT SYSTEM

Use a consistent application shell.

Desktop:

```text
┌───────────────────────────────────────────────┐
│                  TOP HEADER                   │
├──────────────┬────────────────────────────────┤
│              │                                │
│   SIDEBAR    │          MAIN CONTENT          │
│              │                                │
│              │                                │
└──────────────┴────────────────────────────────┘
```

Mobile:

```text
┌──────────────────────────┐
│       MOBILE HEADER      │
├──────────────────────────┤
│                          │
│       MAIN CONTENT       │
│                          │
└──────────────────────────┘
```

The sidebar should become a drawer/sheet on mobile.

---

# 10. SIDEBAR-FIRST DESIGN SYSTEM

The **Sidebar is one of the most important components of the entire application**.

Build the Sidebar architecture BEFORE building the major dashboard pages.

The Sidebar must establish the application's visual language.

It should include:

* Sportify branding
* Logo/icon
* Main navigation
* Active navigation state
* Navigation groups
* Icons
* Optional badges
* User/profile section
* Settings
* Logout
* Collapse/expand behavior
* Mobile drawer behavior

Example navigation:

```text
SPORTIFY

MAIN
  Dashboard
  Tournaments
  Matches
  Teams
  Players

MANAGEMENT
  My Squad
  Fixtures
  Results
  Statistics

SYSTEM
  Settings
  Profile
  Logout
```

Do NOT blindly use these exact navigation items if the application's role structure requires something different.

Use the provided application requirements as the source of truth.

---

# 11. SIDEBAR INTERACTION

Desktop:

```text
Expanded
↓
Logo + text
↓
Navigation icon + label
```

Collapsed:

```text
Icon only
```

Mobile:

```text
Header menu button
↓
Sidebar drawer
```

States required:

```text
default
hover
active
focus
disabled
collapsed
mobile
```

Active navigation must be visually obvious.

Do not rely only on color.

Use combinations of:

* background
* icon
* typography
* border/accent
* subtle indicator

---

# 12. COMPONENT DESIGN RULES

Use reusable components.

Do NOT duplicate UI code unnecessarily.

Recommended structure:

```text
components/
├── ui/
├── common/
├── home/
├── tournaments/
├── match-center/
└── player/
```

Build reusable components before duplicating them across pages.

Examples:

```text
Sidebar
Header
PageHeader
StatCard
DataTable
EmptyState
LoadingSkeleton
SearchInput
FilterBar
StatusBadge
TeamLogo
PlayerAvatar
MatchCard
TournamentCard
```

---

# 13. ANIMATION

Use Framer Motion where useful.

Animations must be:

* subtle
* fast
* professional
* purposeful

Use animations for:

* sidebar transitions
* page transitions
* cards
* modals
* drawers
* hover interactions
* loading states

Avoid excessive animation.

---

# 14. RESPONSIVE DESIGN

Every page must support:

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

Minimum mindset:

```text
320px+
768px+
1024px+
1280px+
1536px+
```

Never build desktop-only layouts.

Do not wait until the end to make the application responsive.

Build responsiveness while implementing each component.

---

# 15. TECH STACK

## Frontend

```text
Next.js
App Router
TypeScript
Tailwind CSS
Shadcn UI
Framer Motion
Lucide React
Recharts / Chart.js
```

## Backend

```text
Node.js
Express.js
TypeScript
Prisma ORM
PostgreSQL
Socket.io
```

Use strict TypeScript.

Avoid `any` unless absolutely necessary.

---

# 16. EXACT FRONTEND FOLDER STRUCTURE

This structure is the source of truth.

DO NOT change it without explicit approval.

```text
sportify-frontend/
├── public/
│   ├── images/
│   └── icons/
│
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (dashboard)/
│   │   │   ├── admin/
│   │   │   │   ├── tournaments/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── matches/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   └── captain/
│   │   │       ├── squad/
│   │   │       │   └── page.tsx
│   │   │       └── page.tsx
│   │   │
│   │   ├── tournaments/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       ├── page.tsx
│   │   │       ├── standings/
│   │   │       ├── fixtures/
│   │   │       └── stats/
│   │   │
│   │   ├── matches/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── players/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   ├── matches/
│   │   │   └── tournaments/
│   │   │
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── error.tsx
│   │   └── loading.tsx
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── common/
│   │   ├── home/
│   │   ├── tournaments/
│   │   ├── match-center/
│   │   └── player/
│   │
│   ├── config/
│   │   └── site-config.ts
│   │
│   ├── hooks/
│   │   ├── use-socket.ts
│   │   └── use-auth.ts
│   │
│   ├── lib/
│   │   ├── api.ts
│   │   ├── utils.ts
│   │   └── socket.ts
│   │
│   ├── services/
│   │   ├── match-service.ts
│   │   ├── tournament-service.ts
│   │   └── auth-service.ts
│   │
│   ├── store/
│   │   └── use-auth-store.ts
│   │
│   └── types/
│       ├── index.d.ts
│       ├── tournament.ts
│       ├── match.ts
│       └── player.ts
│
├── .env.local
├── next.config.mjs
├── package.json
└── tailwind.config.ts
```

---

# 17. FRONTEND DEVELOPMENT PHASE

Frontend MUST be completed before backend development begins.

Divide frontend into small steps.

Recommended execution sequence:

### STEP 1

Inspect the existing repository/project.

Determine:

* current files
* current dependencies
* existing configuration
* existing Git state

Do not delete existing work without approval.

---

### STEP 2

Initialize/verify the frontend environment.

Verify:

* Next.js
* TypeScript
* Tailwind
* Shadcn
* Framer Motion
* Lucide
* Recharts

---

### STEP 3

Create/verify the exact folder structure.

Do not implement large features yet.

---

### STEP 4

Create the global design system.

Implement:

* colors
* typography
* spacing
* radius
* shadows
* backgrounds
* borders
* dark theme
* reusable CSS variables

---

### STEP 5

Create the root application layout.

Implement:

* root layout
* fonts
* theme
* global styles
* toast provider if required

---

### STEP 6

Build the Sidebar architecture.

This is a major milestone.

First create:

```text
Sidebar component
Sidebar navigation config
Sidebar active state
Sidebar collapse state
Sidebar responsive behavior
```

---

### STEP 7

Complete Sidebar UI.

Focus heavily on:

* pixel-level spacing
* icons
* active states
* hover states
* typography
* branding
* profile section
* responsive drawer

---

### STEP 8

Build Header.

Include:

* page title
* search where required
* notifications
* profile
* mobile menu

---

### STEP 9

Create the dashboard shell.

Do NOT immediately fill it with every feature.

First establish:

```text
Sidebar
+
Header
+
Main Content
+
Page Container
```

---

### STEP 10+

Build the remaining frontend features one small step at a time.

---

# 18. FRONTEND FEATURE ORDER

Build in this order:

## A. Landing Page

Include:

* Hero
* Live Match ticker
* Upcoming Fixtures
* Featured Player
* Tournament highlights
* CTA sections

---

## B. Tournament Listing

Include:

* tournament cards
* search
* filters
* status
* date
* sport
* pagination if required

---

## C. Tournament Details

Include:

```text
Overview
Fixtures
Standings
Statistics
```

---

## D. Match Center

Include:

* scoreboard
* teams
* score
* match status
* timeline
* goals
* cards
* substitutions
* match information

---

## E. Player Profile

Include:

* player identity
* team
* position
* statistics
* performance
* match history
* charts

---

## F. Admin Dashboard

Include:

* overview
* tournament management
* match management
* fixture generation
* live score control
* statistics

---

## G. Captain Dashboard

Include:

* squad
* team information
* fixtures
* results
* player management where applicable

---

# 19. FRONTEND DATA

Before backend integration, use properly structured local/mock data.

Do NOT hardcode random data directly inside JSX.

Keep demo data organized and typed.

Example:

```text
Tournament
Team
Player
Match
MatchEvent
User
```

Use TypeScript interfaces.

The UI should be designed so replacing mock data with API data later requires minimal changes.

---

# 20. FRONTEND COMPLETION GATE

Before starting backend, verify:

```text
[ ] All frontend routes work
[ ] Sidebar complete
[ ] Header complete
[ ] Responsive design complete
[ ] Landing page complete
[ ] Tournament pages complete
[ ] Match center complete
[ ] Player pages complete
[ ] Admin dashboard complete
[ ] Captain dashboard complete
[ ] Loading states complete
[ ] Empty states complete
[ ] Error states complete
[ ] Mobile UI reviewed
[ ] Tablet UI reviewed
[ ] Desktop UI reviewed
[ ] TypeScript clean
[ ] No major console errors
[ ] No broken imports
[ ] No broken routes
[ ] Git history clean
[ ] Latest frontend changes pushed
```

Only after all of these are satisfied:

# START BACKEND

---

# 21. EXACT BACKEND STRUCTURE

After frontend is completely finished, create the backend using this exact modular structure:

```text
sportify-backend/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── src/
│   ├── config/
│   │   ├── env.ts
│   │   └── prisma.ts
│   │
│   ├── constants/
│   │   └── roles.ts
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── validate.middleware.ts
│   │
│   ├── utils/
│   │   ├── api-response.ts
│   │   └── socket.ts
│   │
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.interface.ts
│   │   │   ├── auth.validation.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.controller.ts
│   │   │   └── auth.route.ts
│   │   │
│   │   ├── user/
│   │   │   ├── user.interface.ts
│   │   │   ├── user.validation.ts
│   │   │   ├── user.service.ts
│   │   │   ├── user.controller.ts
│   │   │   └── user.route.ts
│   │   │
│   │   ├── tournament/
│   │   │   ├── tournament.interface.ts
│   │   │   ├── tournament.validation.ts
│   │   │   ├── tournament.service.ts
│   │   │   ├── tournament.controller.ts
│   │   │   └── tournament.route.ts
│   │   │
│   │   ├── team/
│   │   │   ├── team.interface.ts
│   │   │   ├── team.validation.ts
│   │   │   ├── team.service.ts
│   │   │   ├── team.controller.ts
│   │   │   └── team.route.ts
│   │   │
│   │   ├── player/
│   │   │   ├── player.interface.ts
│   │   │   ├── player.validation.ts
│   │   │   ├── player.service.ts
│   │   │   ├── player.controller.ts
│   │   │   └── player.route.ts
│   │   │
│   │   ├── match/
│   │   │   ├── match.interface.ts
│   │   │   ├── match.validation.ts
│   │   │   ├── match.service.ts
│   │   │   ├── match.controller.ts
│   │   │   └── match.route.ts
│   │   │
│   │   └── stats/
│   │       ├── stats.interface.ts
│   │       ├── stats.service.ts
│   │       ├── stats.controller.ts
│   │       └── stats.route.ts
│   │
│   ├── routes/
│   │   └── index.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── .env
├── package.json
└── tsconfig.json
```

This backend structure is also fixed.

Do not randomly reorganize modules.

---

# 22. BACKEND DEVELOPMENT ORDER

Backend should also use very small steps.

Example:

```text
BACKEND STEP 1
Initialize Express + TypeScript

BACKEND STEP 2
Environment configuration

BACKEND STEP 3
Prisma setup

BACKEND STEP 4
Database schema

BACKEND STEP 5
User module

BACKEND STEP 6
Authentication

BACKEND STEP 7
Tournament module

BACKEND STEP 8
Team module

BACKEND STEP 9
Player module

BACKEND STEP 10
Match module

BACKEND STEP 11
Stats module

BACKEND STEP 12
Socket.io

BACKEND STEP 13
API testing

BACKEND STEP 14
Frontend integration
```

Again:

```text
IMPLEMENT
→ TEST
→ FIX
→ COMMIT
→ PUSH
→ NEXT
```

---

# 23. DATABASE

Use:

```text
PostgreSQL
Prisma
```

Models should include at minimum:

```text
User
Tournament
Team
Player
Match
MatchEvent
```

Match events should support:

```text
Goal
Yellow Card
Red Card
Substitution
```

Relations must be explicit and properly typed.

---

# 24. AUTHENTICATION

Implement:

```text
JWT authentication
Password hashing
Role-based authorization
Admin
Captain
User
```

Never expose sensitive information to the client unnecessarily.

Validate request payloads.

Use centralized error handling.

---

# 25. REAL-TIME MATCH SYSTEM

Use Socket.io for:

```text
Live score
Goals
Cards
Substitutions
Match status
Match events
```

Flow:

```text
Admin
   ↓
Backend
   ↓
Socket.io
   ↓
Public Match Center
```

The public match center should update without requiring a full page refresh.

---

# 26. API ARCHITECTURE

Use:

```text
/api/v1
```

Organize routes by module.

Example:

```text
/api/v1/auth
/api/v1/users
/api/v1/tournaments
/api/v1/teams
/api/v1/players
/api/v1/matches
/api/v1/stats
```

Use standardized API responses.

---

# 27. ERROR HANDLING

Every layer must handle errors properly.

Frontend:

```text
Loading
Error
Empty
Success
```

Backend:

```text
Validation Error
Authentication Error
Authorization Error
Not Found
Database Error
Internal Server Error
```

Never silently fail.

---

# 28. CODE QUALITY RULES

Always:

* use TypeScript
* use reusable components
* use clear naming
* keep files focused
* avoid unnecessary duplication
* avoid huge components
* avoid unnecessary dependencies
* maintain consistent architecture
* keep UI and business logic separated
* use proper error handling

Do not leave:

```text
TODO
FIXME
placeholder
temporary hack
console.log
unused imports
unused variables
```

in production-ready code unless explicitly required.

---

# 29. IMPORTANT — DO NOT CHANGE MY DESIGN

If an existing design or component already exists:

```text
PRESERVE IT
```

Do not replace it simply because you prefer another style.

If improvement is necessary:

```text
inspect
→ understand
→ improve carefully
→ preserve existing visual identity
```

---

# 30. WHEN SOMETHING IS UNCLEAR

Do NOT make major architectural assumptions.

If a decision could affect:

* database architecture
* authentication
* folder structure
* navigation
* major UI
* API design
* business logic

STOP and ask for confirmation.

For small implementation details, use reasonable engineering judgment.

---

# 31. RESPONSE FORMAT FOR EVERY STEP

At the beginning of each step:

```text
STEP X — [NAME]

Goal:
[one short explanation]
```

After implementation:

```text
Completed:
- ...
- ...

Verification:
- ...
- ...

Git:
Commit: ...
Push: successful

Next Step:
STEP X+1 — ...
```

Then STOP.

Do not continue automatically if the step requires confirmation.

---

# 32. FIRST ACTION — VERY IMPORTANT

When this prompt is started:

### DO NOT build the entire project.

Start ONLY with:

# STEP 1 — PROJECT INSPECTION & FRONTEND FOUNDATION

First inspect the existing project and Git repository.

Then:

1. Understand the current project.
2. Identify existing files.
3. Identify existing dependencies.
4. Check the current Git branch/status.
5. Determine whether the frontend already exists.
6. Preserve existing work.
7. Prepare the exact frontend architecture.
8. Do NOT start backend.
9. Do NOT implement all pages.
10. Do NOT jump to later steps.

After Step 1:

```text
VERIFY
→ COMMIT
→ PUSH
→ STOP
```

Then proceed to the next small step only after the previous step is successfully completed.

---

# FINAL GOLDEN RULE

## BUILD SMALL.

## TEST SMALL.

## COMMIT SMALL.

## PUSH SMALL.

## DESIGN CAREFULLY.

## FRONTEND FIRST.

## BACKEND SECOND.

## NEVER SKIP STEPS.

The final product must feel like a **real production-grade sports platform**, not an AI-generated demo.

UI/UX quality, responsive behavior, reusable architecture, clean code, Git history, and maintainability are all first-class requirements.
