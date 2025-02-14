This is a [Next.js](https://nextjs.org) and [Apollo Client](https://www.apollographql.com/docs/react) demo project
bootstrapped with `create-next-app@latest` along with `apollo-client-nextjs`.

## Getting Started

First, install the necessary deps using `npm i` and then run the development server `npm run dev`:

In this project, we demonstrate how `NextJs` works with `Apollo Client` in particular during Server Side Rendering, with
Server Components and Client Components.

We use the latest versions of `React`, `Next`, `Apollo client`, `apollo-client-nextjs` and the rest deps.

## Application Breakdown

- Dashboard Page (layout)
    - User data are fetched on the server without using `Suspense`. For the `Avatar`, we use the component provided by
      `shadcn/ui`, which is a `Client Component`.
- Dashboard Page (Heroes section)
    - Heroes section demonstrates how we can fetch data in the server using apollo client. All components here are SC.
    - We have wrapped our list components `TopHeroes` and `HeroesList` in a `Suspense`, so this way we can inform user
      that application is loading the requested data, by suspending these sections of the page. Using `Suspense` though
      allows us to render the rest of the page without blocking the UI, so this way our user will immediately see a
      partial hydrate version of our app and reduce the First Contentful Paint (FCP) time.
    - For demonstration purposes only, we have simulated slow requests in the above components, so the content can be
      rendered in two different times, which decouples even further the different sections of the page, so one cannot
      block the other.
    - Opening the Network tab, one can see that no requests made to `graphQL server` from client to fetch data, since
      these requests happened on the server.
- Episodes Page
    - Episodes section demonstrates how we can preload data in the server (aka in SC) using apollo client and pass them
      down to Client Components. All components here that render the data are CC.
    - In order to do that, we need to wrap our CC with `PreloadQuery`. This component begins preloading data on server,
      which, can be accessed then by the CC using either `useSuspenseQuery` or `useReadQuery` to avoid request
      waterfalls.
    - Opening the Network tab, one can see that no requests made to `graphQL server` from client to fetch data, since
      data started preloading on the server, hence all requests again happened on the server.

