# Vike vs NextJS experiment

This is me just testing these specific features between the two:

- Speed UX-wise (one or the other should feel faster, Next feels slower).
- Try and prevent "block first byte" because of `+data` (Vike) and server-side fetch in NextJS when trying to fetch data. (specifically for Google's bots).
  - Basically, I want to render a hydrated index.html, but still have client-side navigation (that doesn't block the first byte) - This was my original goal 🎯.

Some findings:

- [x] Vike loads faster for pages with no data (because it fallsback to client-side navigation by default).
- [x] NextJS by default loads SLOWER for all cases (because it never fallsback to client-side navigation, even with `"use client"` on top of a file).
- [x] For my original goal, I still can't achieve "Client-side Navigation with +data without blocking the first byte".
