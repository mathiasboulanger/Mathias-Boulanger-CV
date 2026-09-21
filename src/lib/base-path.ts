/**
 * The site is served from the root of its own domain, so there is no prefix to
 * add. This stays as the single place that decides: under a GitHub Pages
 * project URL the paths needed a prefix, and next/image never applied one
 * because `images.unoptimized` emits the src verbatim. Keeping the indirection
 * means a future move back to a subpath is one line, not a hunt.
 */
export const BASE_PATH = "";

export const asset = (path: string) => `${BASE_PATH}${path}`;
