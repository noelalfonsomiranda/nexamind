# NexaMind - Full-Stack AI SaaS Project Context

## Project Overview

# NexaMind

AI Knowledge & Automation Platform

NexaMind is an AI-powered knowledge and automation SaaS platform that helps organizations store, search, and interact with their internal knowledge using AI assistants and AI agents.

The goal is to build a production-quality SaaS application, not just a chatbot.

Example positioning:

> NexaMind helps companies transform their internal knowledge into an AI-powered assistant that employees can use to search documents, automate workflows, and complete tasks faster.

---

# Target Users

NexaMind is designed as a B2B SaaS application.

## Organizations

Examples:

- Fintech companies
- Software companies
- Customer support teams
- HR departments
- Enterprise teams

---

# User Roles

Future permission model:

```
Organization

├── Owner
│
├── Admin
│
├── Member
│
└── Viewer
```

## Owner

Can manage:

- Billing
- Organization settings
- Users
- Permissions

---

## Admin

Can manage:

- Documents
- AI assistants
- AI agents
- Users
- Settings

---

## Member

Can use:

- AI Chat
- Knowledge Base
- Documents
- AI Agents

---

## Viewer

Read-only access:

- Search documents
- View AI responses

---

# Example Use Cases

## Customer Support

Upload:

- Product documentation
- FAQs
- Support guides

Users ask:

```
How do we handle failed payments?
```

AI responds using company knowledge.

---

## HR

Upload:

- Employee handbook
- Company policies
- Benefits documentation

Employees ask:

```
How many vacation days do I have?
```

---

## Software Engineering

Upload:

- API documentation
- Architecture documents
- Technical guides

Developers ask:

```
How does authentication work?
```

---

# Technology Stack

## Frontend

Current development:

```
Next.js 15
React
TypeScript
Tailwind CSS
```

Responsibilities:

- User interface
- Dashboard
- Authentication pages
- Document interface
- AI chat interface
- Admin interface

Architecture:

- App Router
- Server Components
- Client Components when required
- Server Actions
- Middleware authentication

---

# Backend

Future implementation:

```
Node.js
NestJS
TypeScript
PostgreSQL
```

Responsibilities:

- Business logic
- REST APIs
- Authentication
- Database access
- AI services
- Background jobs

---

# Database

Future:

```
PostgreSQL
```

Tables:

```
Users

Organizations

Organization Members

Roles

Documents

Document Chunks

Embeddings

Conversations

Messages

AI Agents

Workflows
```

---

# AI Stack

Future:

```
OpenAI API
Claude API
Embeddings
RAG
Vector Database
AI Agents
Tool Calling
```

---

# Cloud Infrastructure

Future:

```
AWS

S3
RDS PostgreSQL
EC2 / ECS
Lambda
CloudWatch
```

---

# Monorepo Architecture

Future architecture:

```
nexamind/

├── apps/
│
│   ├── web/
│   │   └── Next.js 15 Frontend
│   │
│   └── api/
│       └── NestJS Backend
│
├── packages/
│
│   ├── ui/
│   │   └── Shared UI components
│   │
│   ├── shared-types/
│   │   └── Shared TypeScript types
│   │
│   └── config/
│       └── Shared configurations
│
├── docker-compose.yml
├── package.json
└── README.md
```

---

# Current Development Stage

Currently building the frontend foundation.

Current stack:

```
Next.js 15 App Router
```

Implemented:

✅ App Router  
✅ Layouts  
✅ Server Components  
✅ Client Components  
✅ Server Actions  
✅ Middleware authentication  
✅ Protected routes  
✅ Login flow  
✅ Logout flow  
✅ Dashboard layout  
✅ Reusable UI components  
✅ Monochrome design system  

---

# Current Folder Structure

```
my-next-app/

├── app/
│
│   ├── login/
│   │   └── page.tsx
│   │
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   │
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   │
│   │   ├── documents/
│   │   │   └── page.tsx
│   │   │
│   │   ├── ai-chat/
│   │   │   └── page.tsx
│   │   │
│   │   ├── agents/
│   │   │   └── page.tsx
│   │   │
│   │   └── settings/
│   │       └── page.tsx
│   │
│   └── layout.tsx
│
├── components/
│
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Input.tsx
│   │   ├── Label.tsx
│   │   └── index.ts
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── NavLink.tsx
│   │   ├── PageHeader.tsx
│   │   └── index.ts
│   │
│   └── index.ts
│
├── actions/
│   └── auth.ts
│
├── lib/
│   └── auth.ts
│
├── middleware.ts
│
├── package.json
└── tsconfig.json
```

---

# Component Architecture

## UI Components

Location:

```
components/ui
```

Purpose:

Reusable design system components.

Examples:

```
Button
Card
Input
Label
Container
```

These components should:

- Be reusable
- Not contain business logic
- Not know application routes

---

## Layout Components

Location:

```
components/layout
```

Purpose:

Application shell.

Examples:

```
Navbar
Sidebar
NavLink
PageHeader
```

Responsibilities:

- Navigation
- Dashboard structure
- Page layout

---

# Design System

NexaMind uses a monochrome design system.

## Colors

```
Background:
#FFFFFF

Surface:
#FAFAFA

Foreground:
#111111

Muted Text:
#525252

Border:
#E5E5E5

Primary:
#111111

Primary Foreground:
#FFFFFF
```

---

## Design Rules

Use:

- Subtle borders
- Minimal shadows
- Rounded-xl cards
- Black primary actions
- Gray secondary text

Avoid:

- Bright colors
- Heavy gradients
- Excessive shadows

Style inspiration:

- Vercel
- Linear
- Notion
- Stripe Dashboard

---

# Authentication Flow

Current authentication is temporary.

Flow:

```
User

↓

/login

↓

Server Action

actions/auth.ts

↓

Validate credentials

↓

Create session cookie

↓

middleware.ts

↓

Protected routes
```

---

# Login Implementation

File:

```
actions/auth.ts
```

Temporary credentials:

```
email:
admin@test.com

password:
admin
```

Successful login:

1. Validate credentials
2. Create cookie
3. Redirect to dashboard

Cookie:

```ts
cookieStore.set(
  "session",
  "logged-in",
  {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  }
);
```

---

# Failed Login

Invalid credentials:

```ts
{
  error: "Invalid email or password"
}
```

Login page uses:

```tsx
"use client";
```

because it requires:

- useState
- Form interaction
- Error handling

---

# Logout Flow

Location:

```
actions/auth.ts
```

Flow:

```
Navbar

↓

Logout Button

↓

Server Action

↓

Delete Cookie

↓

Redirect /login
```

---

# Middleware Authentication

File:

```
middleware.ts
```

Purpose:

Protect routes before rendering.

Checks:

```ts
const session =
request.cookies.get("session");

const isLoggedIn =
!!session;
```

---

# Protected Routes

```
/dashboard
/dashboard/profile
/dashboard/documents
/dashboard/ai-chat
/dashboard/agents
/dashboard/settings
```

No session:

```
/dashboard

↓

/login
```

---

# Auth Route

```
/login
```

Already logged in:

```
/login

↓

/dashboard
```

---

# Server Components vs Client Components

## Server Components

Default in Next.js.

Use for:

- Data fetching
- Authentication checks
- Server logic
- Static UI

Examples:

```
Dashboard page
PageHeader
Card
Container
Button
```

---

## Client Components

Use only when required.

Example:

```tsx
"use client";
```

Needed for:

- useState
- useEffect
- Event handlers
- Browser APIs
- Interactive UI

Examples:

```
LoginForm

ChatInput

FileUploader

Modal

Dropdown
```

---

# Current Architecture

```
Request

↓

middleware.ts

↓

Check session cookie

↓

+----------------+

|                |

Logged in     Not logged in

|                |

v                v

Allow        Redirect /login


↓

Server Components

↓

lib/auth.ts

↓

Current User
```

---

# Future Roadmap

## Phase 1 - Frontend Foundation

Current:

```
Next.js 15
Authentication
Dashboard
Layouts
Middleware
Server Actions
Design System
```

---

## Phase 2 - Backend

Add:

```
NestJS
Node.js
PostgreSQL
Prisma / Drizzle
REST APIs
```

---

## Phase 3 - SaaS Features

Add:

```
Organizations
Users
Roles
Permissions
Billing
```

---

## Phase 4 - AI Features

Add:

```
Document Upload
PDF Processing
Embeddings
RAG
AI Chat
```

---

## Phase 5 - AI Agents

Add:

```
AI Agents
Workflow Automation
Email Integration
Slack Integration
External APIs
```

---

## Phase 6 - Deployment

Add:

```
Docker
AWS
CI/CD
Monitoring
```

---

# Instructions for LLM

When helping with this project:

- Maintain the existing architecture.
- Prefer Server Components by default.
- Use Client Components only when browser interaction is required.
- Use Server Actions for mutations.
- Keep reusable UI inside components/ui.
- Keep layout components inside components/layout.
- Keep business logic inside lib.
- Keep mutations inside actions.
- Keep middleware responsible only for authentication checks.
- Preserve the current folder structure unless there is a strong reason to change it.
- Explain why a pattern is recommended.
- Avoid unnecessary rewrites.
- Follow the monochrome design system.
- Consider scalability and production architecture.
- Remember this project will evolve into a Next.js + NestJS monorepo SaaS application.
```

This version is now aligned with where **NexaMind actually is today**, instead of the older version that still described only the initial login/dashboard stage. It should work better as a persistent context prompt for ChatGPT, Claude, or Kiro.