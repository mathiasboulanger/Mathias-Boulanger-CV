/**
 * The GitHub Pages project subpath.
 *
 * `basePath` in next.config.ts covers next/link, but NOT next/image when
 * `images.unoptimized` is on: the src is emitted verbatim. Any asset referenced
 * by hand goes through here, or it 404s in production while working in dev.
 */
export const BASE_PATH = "/Mathias-Boulanger-CV";

export const asset = (path: string) => `${BASE_PATH}${path}`;
