# Authentication Tutorial

A production-ready Next.js authentication tutorial demonstrating Supabase auth flows with real session listeners.

## Overview

This project showcases two authentication patterns using Supabase and Next.js 16:

1. **Email + Password** - Classic credentials flow with Supabase-managed sessions and a React listener that never goes stale
2. **Google Login** - Social login via OAuth with automatic UI sync powered by `onAuthStateChange`

## Features

- ✅ Server-side authentication with Supabase SSR
- ✅ Client-side session management with React listeners
- ✅ Protected routes via Next.js proxy (middleware)
- ✅ Automatic token refresh handling
- ✅ Type-safe Supabase client setup

## Prerequisites

- Node.js 18+ 
- A Supabase project ([create one here](https://supabase.com))

## Getting Started

### 1. Clone and Install

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

You can find these values in your Supabase project settings

### 3. Configure Supabase

#### For Email + Password:
- Enable Email provider in Authentication > Providers

#### For Google Login:
- Enable Google provider in Authentication > Providers
- Add your redirect URL
- Add production redirect URL when deploying

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the demo.

## Project Structure

```
├── app/
│   ├── email-password/     # Email + Password demo
│   ├── google-login/        # Google OAuth demo
│   └── page.tsx             # Home page with demo links
├── lib/
│   └── supabase/
│       ├── browser-client.ts    # Client-side Supabase client
│       └── server-client.ts     # Server-side Supabase client
└── proxy.ts                 # Next.js proxy for protected routes
```

## Key Concepts

### Server Client (`lib/supabase/server-client.ts`)
- Used in Server Components and API routes
- Shares cookies via Next.js `cookies()` API
- Automatically refreshes tokens when needed

### Browser Client (`lib/supabase/browser-client.ts`)
- Used in Client Components
- Singleton pattern for efficiency
- Works with React's `onAuthStateChange` listener

### Proxy (`proxy.ts`)
- Runs on every request
- Protects routes starting with `/protected`
- Redirects unauthenticated users to `/login`

## Demo Pages

- `/email-password` - Email + Password authentication demo
- `/google-login` - Google OAuth authentication demo

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- [Next.js 16](https://nextjs.org) - React framework with App Router
- [Supabase](https://supabase.com) - Authentication and backend
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Tailwind CSS](https://tailwindcss.com) - Styling

## Learn More

- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Next.js Documentation](https://nextjs.org/docs)

###############################################

## Notes

How to Build Authentication with Supabase Auth + Next.js 16 (Full Step-by-Step Tutorial)
https://www.youtube.com/watch?v=n_sNri8TGGo

Nextjs 16

1. create nextjs app:
command: npm create next-app@latest

2. build libraries:
command: npm install

3. run app:
command: nom run dev

4. install Supabase Auth:
command: npm install @supabase/ssr @supabase/supabase-js

5. home page: app/page.tsx

6. configuration of connection to supabase:
lib/supabase/server-client-ts

in supabase project, click connect, then API Keys:
    Project URL -> NEXT_PUBLIC_SUPABASE_URL
    Anon Key (Legacy) -> NEXT_PUBLIC_SUPABASE_ANON_KEY

    put in .env.local

7. Flow 1: Supabase Authentication: Email + Password:
app/email-password

email confirm mail to redirect to a page different of localhost:
    EmailPasswordDemo.tsx: uncomment:
        options: {
          emailRedirectTo: `${window.location.origin}/welcome`,
        }

    Go Supabase/Authentication:
        Site URL: http://localhost:3000
        redirect URLs: add your domain like https://my-domain/welcome

8. Flow 2: Google Login (Google Provider): Google Auth
app/components/AuthDemoPage.tsx
app/email-password/EmailPasswordDemo.tsx

Register our Supaerbase app in Google Cloud:
    https://cloud.google.com/

    organization: wodzarod
    project: proctor-simulator
    $300 in free credit

        APIs & Services/Credentials
            Configure consent screen
            Click Get Started

            App name: Supabase
            User support email: zarod2019@gmail.com
            Audience: External
            Contact Information: zarod2019@gmail.com
            Finish, Create

        Create our OAuth client:
            Overview/Create OAuth client
            Clients:
                Application type: Web application
                Name: Supabase Client

            Go Supabase/Authentication/Sign In Providers
                Google, click Disabled, copy Callback URL (for OAuth)
                and paste in Google Cloud console in Authorized redirect URIs

                Copy Client ID and Client secret into Supabase (Client IDs and Client Secret (for OAuth))

                check Enable Sign in with Google

app/google-login

9. Used for Eye, EyeOff:
npm install lucide-react
