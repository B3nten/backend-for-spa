# BFF REACT CSR PROOF OF CONCEPT

This is a proof of concept for a hyper-minimal framework that provides a
"backend for a frontend" for a client rendered React (or similar) application.

The data can be inlined in the HTML shell, meaning it's available on the initial
render. But these fetches occur at request time like with SSR, rather than at
build time like with SSG. This can give a similar set of features to something
like Remix loaders or Next's getServerSideProps, but with an entirely
client-side rendered application. Ideal for highly interactive apps such as
those that make extensive use of three.js and don't want to deal with the
complexities of SSR, Suspense, RSC's, streaming etc.

## Running the dev server

```
deno run -A --watch --import-map=importMap.json ./server.tsx
```
