# Vike vs NextJS experiment

GOAL: Fetching first-load via SSR for SEO, but still be able to do CSR without delay (with SPA-style user experience).

## Findings:

### NextJS

- ✅ NextJS can do the CSR without delay after first load as it caches the page. By default, which is nice.
- But might be hard to use it together with TanStack for this specific usecase.
- Might also be difficult to tweak the caching?

### Vike

- 😥 Vike does not cache by default, so a page with `+data.ts` will ALWAYS block-first-byte as it fetches `pageContext.json` in client-side navigations. Even if it was loaded before, or during client-side navigations.
- Vike can do this in two ways:
  1. Cache Headers
     - Standalone Vike: Built-in way to do this is [not yet possible](https://github.com/vikejs/vike/issues/1803).
     - Vike as a Middleware: Possible by adding cache headers on per-page basis (make a custom hook for this).
  2. Use `+data.shared.ts`
     - Use it to prefetch data on the server and hydrate on the client.
     - `.shared` is special as it disables `pageContext.json` fetching in client-side navigations (thereby making it FAST). But also keeps the regular `+data.ts` behavior on first load.
     - Then we use the [**usual method**](https://github.com/Blankeos/solid-launch/blob/main/src/utils/ssr/create-dehydrated-state.ts) of creating dehydrated state and hydrating it on the client.
     - 🤔 But one thing might be troublesome: client-side `+data` calls have to be guarded so that it doesn't run, but it has to inevitably return something (which will overwrite the existing first-load data).
     - That is why caching it with TanStack Query is necessary.
