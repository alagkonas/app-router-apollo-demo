# Next.js and Apollo Client Demo

This is a [Next.js](https://nextjs.org) and [Apollo Client](https://www.apollographql.com/docs/react) demo project
bootstrapped with `create-next-app@latest` along with `apollo-client-nextjs`.

## Tech Stack

- Next.js 15.1.x
- Apollo Client 3.13.x
- React 19.0.x
- TypeScript 5
- shadcn/ui

## Getting Started

First, install the necessary dependencies using `npm install` and then run the development server with `npm run dev`.

In this project, we demonstrate how `Next.js` works with `Apollo Client` in particular during Server Side Rendering,
with Server Components and Client Components.

We use the latest versions of `React`, `Next.js`, `Apollo Client`, `apollo-client-nextjs` and the remaining
dependencies.

## API Reference

The project uses the Rick and Morty GraphQL API:

- Base URL: https://rickandmortyapi.com/graphql
- Documentation: https://rickandmortyapi.com/documentation

## Application Breakdown

- Dashboard Page (layout)
    - User data is fetched on the server without using `Suspense`. For the `Avatar`, we use the component provided by
      `shadcn/ui`, which is a `Client Component`. Since we don't use `Suspense`, if we uncomment line 8 in `Sidebar`, we
      will see that the entire app is blocked until this request resolves (don't forget to comment line 8 again).

- Dashboard Page (Heroes section)
    - Heroes section demonstrates how we can fetch data on the server using `Apollo Client`. All components here are
      Server Components (`SCs`).
    - We have wrapped our list components `TopHeroes` and `HeroesList` in a `Suspense`, so we can inform the user that
      the application is loading the requested data by suspending these sections of the page. Using `Suspense` allows us
      to render the rest of the page without blocking the UI, so our user will immediately see a partially hydrated
      version of our app and reduce the First Contentful Paint (FCP) time.
    - For demonstration purposes only, we have simulated slow requests in the above components, so the content can be
      rendered at two different times, which further decouples the different sections of the page, so one cannot block
      the other.
    - Opening the Network tab, one can see that no requests are made to the `GraphQL` server from the client to fetch
      data, since these requests happened on the server.

- Episodes Page
    - Episodes section demonstrates how we can preload data on the server using `Apollo Client` and pass them down to
      Client Components (`CCs`). All components here that render the data are `CCs`.
    - In order to do that, we need to wrap our `CC` with `PreloadQuery`. This component begins preloading data on the
      server which can be accessed then by the `CCs` using either `useSuspenseQuery`, `useQuery` or `useReadQuery` to
      avoid request waterfalls.
    - Opening the Network tab, one can see that no requests are made to the `GraphQL` server from the client to fetch
      data, since data started preloading on the server, hence all requests again happened on the server.

- Locations Page
    - Locations section demonstrates how we can fetch data on the server, fetch data on the client, and utilize
      `Apollo Client` for state management between `CCs`.
    - Again, we wrap our components that handle requests either on the server or on the client with `Suspense`. This
      time `TopLocations` and `WorstLocations` are `CCs` while `LocationsList` is an `SC`.
    - For `WorstLocations`, we use the `fetchPolicy: 'cache-only'` option, so that we will not fire a second request to
      the `GraphQL` server and use the cache created from `TopLocations` request.
    - Opening the Network tab, one can see that only one request is made to the `GraphQL` server from the client.

## Remarks and Personal Comments

- Although the `apollo-client-nextjs` package's `README.md` states that it's an experimental `API`, race conditions seem
  to be the only catch during SSR of `CCs`. This can boil down to an architectural problem inside the codebase rather
  than incompatibility between `Next.js` and `Apollo`.
- When using `useQuery` hook either when preloading data or when fetching directly to the client, we can pass the option
  `ssr: false` which skips executing the query during SSR, so we don't have overlapping queries on client and server.
- In all above examples, usage of `Suspense` is optional, but is highly recommended in order to create the best user
  experience using SSR streaming.
- The `apollo-client-nextjs` depends on the latest versions of `React`, `Next.js`, and `Apollo`, so before starting to
  migrate your existing codebase, you need to make sure first that the rest of your third-party libraries can support
  the latest version of `React` and `Next.js`.
- In conclusion, migration to `Next` with `App Router` and `Apollo Client` using the package `apollo-client-nextjs`, is
  a matter that is really coupled to each codebase, it's dependencies on third-party libraries, and it's architectural
  design. However, when starting a new project, this would be the preferable way to go, since leveraging the latest
  `Nextjs` and `React` features would bring the greatest user experience.