This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Project Deployed in Vercel: [CRUD App - Nextjs 13 New Features]()

Nextjs 14 Project using:

- Nextjs 14 Features
  - Src and App Folder
  - Import Alias (@)
  - .env.local and .env
  - Metadata
  - Types
  - Client Side
    - Google Fonts and TailwindCSS
    - Link and Image Componente
    - Layout and Page Structure
    - Client Routes
    - Dynamic Routes ([id] folder) and Params | SearchParams (/products/[id]?params=example)
    - Static Site Generation using generateStaticParams() Function to get data from API
    - Async GET in page.tsx -> Server Components
    - Suspense React Component
    - Page not-found.tsx, loading.tsx and notFound() Function from 'next/navigation' that redirect to 404 page, Error Handling Function
    - Streaming Data with Suspense and Skeleton Loading
    - useRouter(), useParam() and useSearchParams Hooks in Client Components
    - Revalidate -> Tags and revalidateTag() Function from next/cache, next: cache and revelidate options in get from Page.
    - Route Groups
  - Server Side
    - API Routes using Route Handlers API -> params, query, body and searchParams
    - params and searchParams in Route Handlers API
    - Server Actions using useFormStatus and useTransition React Hooks from react for Delete Button
  - ESLint and Prettier
  - SerpAPI and Google Search API

### Links Projects

- [Sonny Sangha - The Ultimate NEXT.JS 13 Crash Course for Beginners - Build 6 Apps in 18 Hours! (2023)](https://www.youtube.com/watch?v=7DVdVGm7Ht8)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
