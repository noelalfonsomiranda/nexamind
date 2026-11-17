# Next.js App Router Project Context

## NexaMind

An AI-powered knowledge and automation platform that helps users store, search, and interact with information using AI assistants and agents.

## Project Overview

I am building a Next.js 15 application using the App Router.

The purpose of this project is to learn and implement production-style Next.js patterns:

- App Router
- Layouts
- Server Components
- Client Components
- Server Actions
- Middleware authentication
- Protected routes
- Full-stack architecture

Follow modern Next.js patterns.

Prefer:
- Server Components by default
- Server Actions for mutations
- Client Components only when browser interaction is needed

---

# Current Folder Structure

```
my-next-app/

├── app/
│   ├── login/
│   │   └── page.tsx
│   │
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   └── settings/
│   │       └── page.tsx
│   │
│   └── layout.tsx
│
├── components/
│   ├── Navbar.tsx
│   └── Sidebar.tsx
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

# Folder Responsibility

## app/

Responsible for:

- Routes
- Pages
- Layouts

Example:

```
app/dashboard/page.tsx
app/dashboard/profile/page.tsx
app/dashboard/settings/page.tsx
```

---

## components/

Reusable UI components.

Example:

```
components/
├── Navbar.tsx
└── Sidebar.tsx
```

Components should contain UI logic only.

---

## actions/

Contains Server Actions.

Example:

```
actions/auth.ts
```

Used for:

- login
- logout
- future mutations

Server Actions use:

```ts
"use server";
```

---

## lib/

Contains reusable business logic.

Example:

```
lib/auth.ts
```

Contains:

- getCurrentUser()
- requireUser()
- authentication helpers

---

# Current Routes

## Public Route

```
/login
```

Accessible only when logged out.

---

## Protected Routes

```
/dashboard
/dashboard/profile
/dashboard/settings
```

Require authentication.

---

# Authentication Flow

Current flow:

```
User
 |
 |
 v
/login
 |
 |
 v
Server Action
(actions/auth.ts)
 |
 |
 v
Create session cookie
 |
 |
 v
middleware.ts
 |
 |
 v
Protected pages
```

---

# Login Implementation

File:

```
actions/auth.ts
```

Current temporary credentials:

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

Success:

```
/login

↓

/dashboard
```

---

# Failed Login

Invalid credentials return:

```ts
{
  error: "Invalid email or password"
}
```

The login form displays the error.

The login page uses:

```tsx
"use client";
```

because it needs:

- useState
- form interaction
- error handling

---

# Logout Implementation

Logout is inside:

```
actions/auth.ts
```

Example:

```ts
export async function logout(){

 const cookieStore = await cookies();

 cookieStore.delete("session");

 redirect("/login");

}
```

---

# Navbar Implementation

File:

```
components/Navbar.tsx
```

Navbar is a shared component used by dashboard pages.

Current features:

- Application logo
- Dashboard link
- Profile link
- Settings link
- Logout button

Logout uses Server Action directly:

```tsx
<form action={logout}>
  <button>
    Logout
  </button>
</form>
```

Flow:

```
Navbar
 |
 |
Logout button
 |
 |
Server Action
 |
 |
Delete cookie
 |
 |
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

Current implementation:

```ts
const session =
 request.cookies.get("session");

const isLoggedIn =
 !!session;
```

---

## Protected Route Logic

Protected routes:

```text
/dashboard
/dashboard/profile
/dashboard/settings
```

If no session:

```
/dashboard

↓

/login
```

---

## Auth Route Logic

Auth route:

```
/login
```

If already logged in:

```
/login

↓

/dashboard
```

---

# Current Middleware Code Pattern

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {

  const session =
    request.cookies.get("session");


  const pathname =
    request.nextUrl.pathname;


  const isLoggedIn =
    !!session;


  const isAuthPage =
    pathname.startsWith("/login");


  const isProtectedRoute =
    pathname.startsWith("/dashboard");


  if(
    isProtectedRoute &&
    !isLoggedIn
  ){
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }


  if(
    isAuthPage &&
    isLoggedIn
  ){
    return NextResponse.redirect(
      new URL("/dashboard", request.url)
    );
  }


  return NextResponse.next();
}


export const config = {
 matcher:[
   "/dashboard/:path*",
   "/login",
 ]
};
```

---

# getCurrentUser()

Location:

```
lib/auth.ts
```

Purpose:

Retrieve current authenticated user.

Current temporary flow:

```
Cookie
 |
 |
getCurrentUser()
 |
 |
Return user object
```

Example:

```ts
{
 id:1,
 name:"Noel",
 email:"admin@test.com",
 role:"admin"
}
```

Future:

```
Cookie
 |
 |
Session ID
 |
 |
Database
 |
 |
Users table
```

---

# Server Components vs Client Components

## Server Components

Default in Next.js.

Used for:

- Data fetching
- Server logic
- Authentication checks

Example:

```
app/dashboard/page.tsx
```

Can:

```ts
const user = await getCurrentUser();
```

---

## Client Components

Only when needed.

Example:

```tsx
"use client";
```

Used for:

- useState
- useEffect
- event handlers
- browser APIs

Current example:

```
Login Form
```

---

# Current Architecture

```
                 Request

                    |

                    v

              middleware.ts

                    |

          Check session cookie

                    |

        +-----------+-----------+

        |                       |

 Logged in              Not logged in

        |                       |

        v                       v

 Allow access          Redirect /login


        |

        v


 Server Components

        |

        v


 lib/auth.ts

        |

        v


 Current User
```

---

# Future Improvements

## Replace Temporary Authentication

Current:

```
Hardcoded user
+
Cookie
```

Future:

```
PostgreSQL
+
User table
+
Password hashing
+
Real sessions
```

---

## Add Database

Possible stack:

```
PostgreSQL
+
Prisma / Drizzle
+
Next.js Server Actions
```

---

## Add Authorization

Future:

Roles:

```
admin
user
manager
```

Example:

```
/admin
```

Only allowed:

```
role === admin
```

---

# Instructions for LLM

When helping with this project:

- Maintain the existing architecture.
- Do not move everything into Client Components.
- Prefer Server Components.
- Use Server Actions for mutations.
- Keep reusable UI inside components/.
- Keep business logic inside lib/.
- Keep mutations inside actions/.
- Keep middleware responsible only for authentication checks.
- Explain why a pattern is recommended.
- Avoid unnecessary rewrites.
- Preserve current folder structure unless there is a strong reason to change it.
- Assume this is a learning project moving toward a production SaaS architecture.
```

This version is now aligned with your **actual current implementation**:
- Navbar logout ✅
- nested dashboard routes ✅
- middleware protection ✅
- Server Actions separation ✅
- App Router conventions ✅